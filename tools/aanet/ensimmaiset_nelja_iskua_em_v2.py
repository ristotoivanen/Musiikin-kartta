#!/usr/bin/env python3
"""Self-contained original synth backing for Musiikin kartta M2/M3.

No SoundFonts, samples, models, imported loops or third-party recordings.
Uses NumPy/SciPy DSP to synthesize all instrument voices from scratch.
Reproducible by running this script, requires numpy scipy soundfile and ffmpeg.
Generated composition/arrangement is provided by Musiikin kartta's owner.
"""
from __future__ import annotations
import hashlib
import math
import subprocess
from pathlib import Path
import numpy as np
from scipy import signal
import soundfile as sf

SR = 48000
BPM = 72
BEAT = 60.0 / BPM
INTRO_BEATS = 4
MUSIC_BEATS = 32
MUSIC_BEGIN = INTRO_BEATS * BEAT
MUSIC_END = (INTRO_BEATS + MUSIC_BEATS) * BEAT
DURATION = MUSIC_END + .4
N = round(DURATION * SR)
SEED = 20261123
FREQS = {'E2':82.4069, 'B2':123.4708, 'E3':164.8138, 'G3':195.9977, 'B3':246.9417, 'E4':329.6276,
         'E1':41.2034,'G1':48.9994,'B1':61.7354}
BASS_NOTES = ['E1','B1','E1','G1', 'E1','B1','G1','B1', 'E1','B1','E1','G1', 'E1','B1','G1','E1']
OUT=Path(__file__).resolve().parent


def highpass(noise:np.ndarray, cutoff:float):
    sos=signal.butter(2, cutoff, 'highpass', fs=SR, output='sos')
    return signal.sosfilt(sos,noise)


def lowpass(noise:np.ndarray, cutoff:float):
    sos=signal.butter(2, cutoff, 'lowpass', fs=SR, output='sos')
    return signal.sosfilt(sos,noise)


def add(track:np.ndarray,sound:np.ndarray,when:float,gain=1.0,pan=0.0):
    ix=round(when*SR)
    if ix>=len(track) or ix<0: return
    length=min(len(sound),len(track)-ix)
    if not length: return
    # Equal-power stereo pan (-1=left, +1=right), same gain at center as mono.
    l=math.cos(math.pi/4*(pan+1))*math.sqrt(2)
    r=math.sin(math.pi/4*(pan+1))*math.sqrt(2)
    track[ix:ix+length,0] += sound[:length]*gain*l
    track[ix:ix+length,1] += sound[:length]*gain*r


def string_wave(freq:float, duration:float, rng:np.random.Generator):
    """Elementary waveguide pluck, generated excitation from synthetic filtered noise."""
    length=round(duration*SR)
    delay=max(8, round(SR/freq))
    excitation=rng.uniform(-1,1,delay+2)
    # Simulates a pick-position spectral notch with a moving average subtraction.
    shift=max(2,round(delay*.15))
    base=excitation.copy()
    excitation[shift:] -= .55*base[:-shift]
    excitation=excitation / (np.max(abs(excitation))+1e-9)
    y=np.zeros(length,dtype=np.float64)
    y[:delay+2]=excitation
    # Higher notes lose energy faster; the loop filter is intentionally simple.
    damping=.996 if freq<170 else .9925
    for i in range(delay+2,length):
        y[i]=damping*(.497*y[i-delay]+.503*y[i-delay-1])
    y=highpass(y,55)
    # Pick transient and note-release envelope
    t=np.arange(length)/SR
    fade=np.minimum(1.0,t/.004)
    env=fade * np.minimum(1.0,np.maximum(0,(duration-t)/.16))
    y*=env
    y/=max(.001,np.max(abs(y)))
    return y


def bass_voice(freq:float, duration:float):
    """Original subtractive plucked electric-bass-like voice, no samples."""
    n=round(duration*SR)
    t=np.arange(n)/SR
    f=freq*(1+.0025*np.exp(-t*34))
    phase=2*np.pi*np.cumsum(f)/SR
    w=np.sin(phase)+.34*np.sin(2*phase+.2)+.14*np.sin(3*phase+.6)+.06*np.sin(4*phase)
    w=np.tanh(1.3*w)/np.tanh(1.3)
    env=(1-np.exp(-t*80))*np.exp(-t*2.5)
    env*=np.minimum(1,np.maximum(0,(duration-t)/.08))
    return .58*w*env


def kick(rng):
    dur=.39; t=np.arange(round(dur*SR))/SR
    hz=53+110*np.exp(-t*35)
    phase=2*np.pi*np.cumsum(hz)/SR
    body=np.sin(phase)*np.exp(-t*17)
    tick=lowpass(rng.standard_normal(len(t)),3900)*np.exp(-t*105)
    return .75*body + .13*tick


def snare(rng):
    dur=.32; t=np.arange(round(dur*SR))/SR
    noise=highpass(rng.standard_normal(len(t)),1250)
    envelope=np.exp(-t*17)*(1-np.exp(-t*800))
    snap=noise*envelope
    body=np.sin(2*np.pi*186*t)*np.exp(-t*26)
    return .24*body+.37*snap


def hi_hat(rng,accent=False):
    dur=.13 if accent else .095
    t=np.arange(round(dur*SR))/SR
    n=highpass(rng.standard_normal(len(t)),6500)
    n=lowpass(n,16500)
    env=np.exp(-t*(37 if accent else 55))*(1-np.exp(-t*1300))
    return n*env*(.17 if accent else .12)


def click(rng,accent=False):
    dur=.12; t=np.arange(round(dur*SR))/SR
    body=np.sin(2*np.pi*(1000 if accent else 835)*t)*np.exp(-t*48)
    n=highpass(rng.standard_normal(len(t)),4200)*np.exp(-t*100)
    return .25*body+.1*n


def guitar_strum(track, times, rng, drive:float):
    # Open Em guitar, all source waveforms synthesized here.
    notes=['E2','B2','E3','G3','B3','E4']
    cache={note:string_wave(FREQS[note],1.35,rng) for note in notes}
    for index,(when,gain,direction) in enumerate(times):
        order=list(range(6)) if direction=='down' else list(range(5,-1,-1))
        for place,j in enumerate(order):
            # Tiny timing / level variations instead of a mechanical chord sample.
            micro=.0095*place+rng.normal(0,.002)
            amp=gain*(.88+.18*rng.random())
            if j==0:amp*=.82
            add(track,cache[notes[j]],when+max(0,micro),gain=amp,pan=-.15+.30*j/5)
    # Soft overdrive to mimic small amplifier; avoid hard clipping.
    track[:]=np.tanh(track*drive)/np.tanh(drive)


def room(track,wet=.065):
    """Small-room early reflections, no impulse response or external asset."""
    dry=track.copy()
    for delay,coef in [(0.033,.28),(0.071,.21),(0.113,.16),(0.189,.12)]:
        d=round(delay*SR)
        track[d:]+=dry[:-d]*coef*wet/.10
    # Very short stereo crossfeed creates a non-headphone-only presentation.
    d=round(.014*SR)
    track[d:,0]+=dry[:-d,1]*wet*.12
    track[d:,1]+=dry[:-d,0]*wet*.12


def produce(label,drive,drums_gain,guitar_gain,bass_gain):
    rng=np.random.default_rng(SEED)
    drums=np.zeros((N,2),dtype=np.float64)
    guitar=np.zeros_like(drums)
    bass=np.zeros_like(drums)
    counting=np.zeros_like(drums)
    for i in range(INTRO_BEATS):
        add(counting,click(rng,accent=(i==0)),i*BEAT,gain=.72,pan=0)
    for beat in range(MUSIC_BEATS):
        when=MUSIC_BEGIN+beat*BEAT
        pos=beat%4
        if pos in (0,2): add(drums,kick(rng),when,gain=1.0 if pos==0 else .76)
        if pos in (1,3): add(drums,snare(rng),when,gain=.80 if pos==1 else .74)
        for eighth in (0,1):
            add(drums,hi_hat(rng,accent=(pos==0 and eighth==0)),when+eighth*BEAT/2,
                gain=.66 if eighth==0 else .55,pan=.10)
    strums=[]
    for bar in range(8):
        start=MUSIC_BEGIN+bar*4*BEAT
        # Sparse Em strokes with rhythmic air for the student's own E2 notes.
        strums.extend([(start,.117 if bar%2==0 else .10,'down'),
                       (start+1.5*BEAT,.070,'up'),
                       (start+2*BEAT,.112,'down'),
                       (start+3.5*BEAT,.061,'up')])
    guitar_strum(guitar,strums,rng,drive)
    for i,note in enumerate(BASS_NOTES):
        bar=i//2
        pos=0 if i%2==0 else 2
        at=MUSIC_BEGIN+(bar*4+pos)*BEAT
        voice=bass_voice(FREQS[note],.69)
        add(bass,voice,at,gain=.61 if pos==0 else .54)
    room(guitar,wet=.075)
    room(drums,wet=.035)
    # Music starts after the 4 spoken counting-equivalent clicks.
    master=drums*drums_gain+guitar*guitar_gain+bass*bass_gain+counting
    # Strictly silence before each cue and trailing 0.4 s, preserving old timing.
    t=np.arange(N)/SR
    endfade=np.clip((MUSIC_END-t)/.070,0,1)
    master*=endfade[:,None]
    # Soft master compression, then deterministic -1.2dBFS maximum.
    master=np.tanh(master*.95)
    peak=np.max(abs(master))
    master*=10**(-1.2/20)/max(peak,1e-10)
    assert np.max(np.abs(master))<1 and np.max(abs(master[round(MUSIC_END*SR):]))==0
    assert MUSIC_BEGIN==4*60/72 and abs(MUSIC_END-30)<1e-8
    wav=OUT/f'em_72bpm_uusi_{label}.wav'
    mp3=OUT/f'em_72bpm_uusi_{label}.mp3'
    sf.write(wav,master,SR,subtype='PCM_24')
    subprocess.run(['ffmpeg','-y','-hide_banner','-loglevel','error','-i',str(wav),'-codec:a','libmp3lame','-b:a','256k','-ar','48000',str(mp3)],check=True)
    rms=np.sqrt(np.mean(master[round(MUSIC_BEGIN*SR):round(MUSIC_END*SR)]**2))
    digest=hashlib.sha256(wav.read_bytes()).hexdigest()
    print(f'{label}: WAV {wav.stat().st_size/1e6:.2f} MB, MP3 {mp3.stat().st_size/1e6:.2f} MB, peak {np.max(abs(master)):.3f}, RMS {20*np.log10(rms):.1f} dBFS, SHA256 {digest}')


if __name__=='__main__':
    produce('A_selkea',drive=1.10,drums_gain=.82,guitar_gain=.98,bass_gain=.95)
    produce('B_rock',drive=2.0,drums_gain=.88,guitar_gain=1.1,bass_gain=.99)
