```python
while True:
    print("\n===== CALCULADORA =====")
    print("1 - Somar")
    print("2 - Subtrair")
    print("3 - Multiplicar")
    print("4 - Dividir")
    print("5 - Sair")

    opcao = input("Escolha uma opção: ")

    if opcao == "5":
        print("Calculadora encerrada!")
        break

    if opcao in ["1", "2", "3", "4"]:
        num1 = float(input("Digite o primeiro número: "))
        num2 = float(input("Digite o segundo número: "))

        if opcao == "1":
            resultado = num1 + num2
            print(f"Resultado: {resultado}")

        elif opcao == "2":
            resultado = num1 - num2
            print(f"Resultado: {resultado}")

        elif opcao == "3":
            resultado = num1 * num2
            print(f"Resultado: {resultado}")

        elif opcao == "4":
            if num2 == 0:
                print("Erro: não é possível dividir por zero!")
            else:
                resultado = num1 / num2
                print(f"Resultado: {resultado}")

    else:
        print("Opção inválida! Escolha uma opção de 1 a 5.")
```

O `while True` mantém o menu funcionando continuamente. Quando o usuário escolhe **5**, o `break` encerra o loop e fecha a calculadora.
