from pathlib import Path
from pypdf import PdfReader
pdf = Path('src/assets/Bilyana_Stefanova_Resume.pdf')
reader = PdfReader(str(pdf))
text = '\n'.join(page.extract_text() or '' for page in reader.pages)
print(text[:25000])
