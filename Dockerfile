# 1. Imagem que vai usar
FROM python:3.12-slim

# 2. Pasta de aplicação
WORKDIR /Calculator_3

# 3. Copia de arquivos de dependencias
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4. Copia codigo fonte
COPY . .

# 5. Porta de aplicação
EXPOSE 5000

# 6. Ligar aplicação
CMD ["python", "Calculator.py"]
