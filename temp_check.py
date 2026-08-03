from pathlib import Path
import importlib.util
pdf = Path('src/assets/Bilyana_Stefanova_Resume.pdf')
print('exists', pdf.exists())
print('PyPDF2', bool(importlib.util.find_spec('PyPDF2')))
print('pypdf', bool(importlib.util.find_spec('pypdf')))
