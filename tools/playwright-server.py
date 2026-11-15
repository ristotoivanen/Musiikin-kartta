#!/usr/bin/env python3
"""Palvele staattista buildia Playwrightin rinnakkaisille selaimille."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from socket import SOMAXCONN


class PlaywrightServer(ThreadingHTTPServer):
    # http.serverin oletusjono voi täyttyä selainten ladatessa ensimmäiset varat yhtä aikaa.
    request_queue_size = SOMAXCONN


if __name__ == '__main__':
    with PlaywrightServer(('127.0.0.1', 8765), SimpleHTTPRequestHandler) as server:
        server.serve_forever()
