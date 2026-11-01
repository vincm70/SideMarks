import os, base64

fpath = os.path.expanduser(r'~\AppData\Local\Google\Chrome\User Data\Default\Local Extension Settings\jdbnofccmhefkmjbkkdkfiicjkgofkdh\000022.ldb')
with open(fpath, 'rb') as f:
    data = f.read()

pos = data.find(b'data:image')
print('Found at:', pos)
print('Context before:', data[max(0, pos-100):pos])
print('Context after:', data[pos:pos+80])

# Find closing quote
end_quote = data.find(b'"', pos)
print('End quote at:', end_quote)

data_url = data[pos:end_quote]
print('Data URL total length:', len(data_url))

header, b64 = data_url.split(b',', 1)
print('Header:', header)
ext = 'jpg' if b'jpeg' in header or b'jpg' in header else 'png'

# decode base64
img_bytes = base64.b64decode(b64)
with open(f'original_family_wallpaper.{ext}', 'wb') as out:
    out.write(img_bytes)
print(f'SUCCESS! Wrote original_family_wallpaper.{ext} with size {len(img_bytes)} bytes!')

# Also write the data_url directly to a JS file so the extension can embed it by default!
with open('default_wallpaper_dataurl.js', 'w', encoding='utf-8') as js_out:
    js_out.write('const ORIGINAL_FAMILY_WALLPAPER = "' + data_url.decode('ascii') + '";\n')
print('Wrote default_wallpaper_dataurl.js!')
