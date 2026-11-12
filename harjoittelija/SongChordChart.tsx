import { SONG_CHARTS, barStartTime, chordAt, sectionBarDuration, songClock, type SongVersion } from './songChart';

/** Harjoituskäyttöön tehty, soitinta seuraava sointukartta. Ei muuta äänen toistoa. */
export function SongChordChart({version, position, onSeek}: {
  version:SongVersion;
  position:number;
  onSeek:(seconds:number)=>void;
}) {
  const chart = SONG_CHARTS[version];
  const current = chordAt(position, version);
  const {section,sectionIndex,barIndex,beat,chord} = current;
  return <section className="song-chord-panel" aria-labelledby="song-chord-heading">
    <div className="session-top">
      <h3 id="song-chord-heading">Soinnut ja sanat</h3>
      <span>G-molli · 4/4 · noin 69 BPM</span>
    </div>
    <div className="song-chord-toolbar">
      <label htmlFor="song-section-jump">Harjoiteltava osa
        <select id="song-section-jump" value={section.id}
          onChange={event => {
            const target=chart.find(item=>item.id===event.target.value);
            if (target) onSeek(target.start);
          }}>
          {chart.map(item=><option key={item.id} value={item.id}>
            {songClock(item.start)} · {item.title}
          </option>)}
        </select>
      </label>
      <p className="song-current-chord">Soiva sointu <strong>{chord}</strong>
        <span>{section.title}, tahti {barIndex+1}, isku {beat}/4</span></p>
    </div>
    <div className="song-bar-grid" role="group" aria-label={section.title + ': tahdit'}>
      {section.bars.map((bar,index)=>{
        const selected=index===barIndex;
        const firstOn=selected && (beat<3 || !bar.second);
        const secondOn=selected && beat>=3 && !!bar.second;
        const contents=bar.first+(bar.second?' '+bar.second:'')+
          (bar.passingBass?' (basson kulku '+bar.passingBass+')':'')+
          (bar.possibleChord?' ('+bar.possibleChord+'?)':'');
        return <button type="button" key={index}
          className={'song-measure'+(selected?' active':'')}
          aria-pressed={selected}
          aria-label={'Tahti '+(index+1)+': '+contents+'. Siirry kohtaan '+songClock(barStartTime(sectionIndex,index,version))}
          onClick={()=>onSeek(barStartTime(sectionIndex,index,version))}>
          <span className="song-measure-number">Tahti {index+1}</span>
          <span className="song-measure-chords">
            <strong className={firstOn?'now':''}>{bar.first}</strong>
            {bar.second && <strong className={secondOn?'now':''}>{bar.second}</strong>}
          </span>
          {bar.passingBass && <small>Basso: ({bar.passingBass}), isku 4</small>}
          {bar.possibleChord && <small>Mahdollinen ({bar.possibleChord}?)</small>}
        </button>;
      })}
    </div>
    {section.lyrics && <div className="song-section-lyrics">
      <h4>{section.title}: sanat</h4>
      {section.lyrics.map((line,i)=><p key={i}>{line}</p>)}
    </div>}
    {section.note && <p className="song-chord-note">{section.note}</p>}
    <p className="tools-note">Paina tahtia hypätäksesi sen alkuun. Kahden soinnun tahdissa vaihto on noin kolmannella iskulla.
      Osioiden alut perustuvat kuunteluun; yksittäisten iskujen korostus on vielä likimääräinen
      ({sectionBarDuration(sectionIndex,version).toFixed(2).replace('.',',')} s/tahti).</p>
  </section>;
}
