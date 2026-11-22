from PIL import Image
from pathlib import Path
base=Path(__file__).resolve().parents[1]
out=base/'public/media'
src=base/'docs/catalogo'
# Extracts supplied catalog regions. No AI generation or replacement of products.
def crop(page,box,name):
 im=Image.open(src/f'pagina-{page}.png').convert('RGB').crop(box)
 im.save(out/f'{name}.webp',quality=92)
crop(0,(229,279,554,632),'logo')
crop(2,(641,135,1235,745),'hero')
groups=[
(1,'suspiros',[(684,136,963,435),(953,137,1190,427),(663,430,958,769),(947,420,1180,733)]),
(2,'face-to-face',[(82,160,340,480),(340,157,598,478),(82,475,340,752),(340,480,593,753)]),
(2,'abrazos-de-flor',[(641,135,1235,745)]),
(3,'todo-de-mi',[(74,170,337,420),(333,182,596,435),(75,423,340,728),(338,475,596,781)]),
(3,'luna-de-rosa',[(681,160,952,402),(948,173,1222,423),(676,399,952,682),(944,480,1227,700)]),
(4,'orbitas-doradas',[(59,165,316,414),(318,158,579,415),(59,412,320,701),(317,411,578,705)])
]
for page,key,boxes in groups:
 for i,box in enumerate(boxes,1): crop(page,box,f'{key}-{i:02d}')
print('23 catalog regions extracted')

