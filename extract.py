import re, json

with open(r'C:\Users\touzo\AppData\Local\Google\Chrome\User Data\Default\Sync Extension Settings\jdbnofccmhefkmjbkkdkfiicjkgofkdh\000003.log', 'rb') as f:
    data = f.read()

matches = re.findall(rb'\{[^{}]*"title":"[^"]+","url":"[^"]+"[^{}]*\}', data)
pills = []
seen = set()
for m in matches:
    try:
        obj = json.loads(m.decode('utf-8'))
        if 'title' in obj and 'url' in obj:
            k = (obj['title'], obj['url'])
            if k not in seen:
                seen.add(k)
                pills.append(obj)
    except:
        pass

print(f'Total {len(pills)} pills found:')
with open('extracted_pills.json', 'w', encoding='utf-8') as out:
    json.dump(pills, out, indent=2, ensure_ascii=False)
for p in pills:
    print(' -', p['title'], '->', p['url'])
