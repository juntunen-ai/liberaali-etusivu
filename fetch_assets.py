from pathlib import Path
import urllib.request
from PIL import Image
root=Path(__file__).parent/'assets'
items={
'logo.png':'https://liberaalipuolue.fi/wp-content/uploads/2017/11/lib-logo-1-fin.png',
'logo-white.png':'https://liberaalipuolue.fi/wp-content/uploads/2017/11/lib-logo-1-fin-white.png',
'lassi.jpg':'https://liberaalipuolue.fi/wp-content/uploads/2023/02/Lassi_Kivinen.jpg',
'laura.jpg':'https://liberaalipuolue.fi/wp-content/uploads/2024/05/Laura-Lahteenmaki.jpg',
'valtteri.jpg':'https://liberaalipuolue.fi/wp-content/uploads/2026/06/Valtteri-Turpeinen-Kuopio.jpg',
'nina.jpg':'https://liberaalipuolue.fi/wp-content/uploads/2024/04/Nina-Sneitz.jpg',
'aarne.jpg':'https://liberaalipuolue.fi/wp-content/uploads/2023/02/Aarne_Leinonen.jpg',
'raleway.ttf':'https://raw.githubusercontent.com/google/fonts/main/ofl/raleway/Raleway%5Bwght%5D.ttf',
'font-license.txt':'https://raw.githubusercontent.com/google/fonts/main/ofl/raleway/OFL.txt',
}
for name,url in items.items():
 data=urllib.request.urlopen(url,timeout=30).read()
 (root/name).write_bytes(data)
 print(name,len(data))
 if name.endswith('.jpg'):
  im=Image.open(root/name);im.thumbnail((1100,1100));im.save(root/name.replace('.jpg','.webp'),'WEBP',quality=88)
