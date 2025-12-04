#!/usr/bin/env python3
# log_parser.py
# Baca file log, ekstrak IP, hitung frekuensi
import re
from collections import Counter
import sys

IP_RE = re.compile(r'\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b')

def extract_ips(path):
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        text = f.read()
    return IP_RE.findall(text)

def main():
    if len(sys.argv) < 2:
        print("Usage: python log_parser.py <logfile>")
        sys.exit(1)
    ips = extract_ips(sys.argv[1])
    counts = Counter(ips)
    print("Top 20 IPs:")
    for ip, c in counts.most_common(20):
        print(f"{ip}\t{c}")

if __name__ == "__main__":
    main()
