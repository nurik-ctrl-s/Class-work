import math

def main():
    print("Простой калькулятор")
    print("Выберите операцию:")
    print("1. Извлечь квадратный корень")
    print("2. Возвести в степень 2")
    print("3. Возвести в степень 3")
    print("4. Вычислить проценты")
    print("5. Обычный калькулятор (сложение, вычитание, умножение, деление)")

    operation = input("Введите номер операции (1/2/3/4/5): ")

    if operation == '1':
        number = float(input("Введите число для извлечения квадратного корня: "))
        if number < 0:
            print("Ошибка! Не существует квадратного корня из отрицательного числа.")
        else:
            result = math.sqrt(number)
            print(f"Квадратный корень из {number} равен {result:.2f}")

    elif operation == '2':
        number = float(input("Введите число для возведения в степень 2: "))
        result = number ** 2
        print(f"{number} в степени 2 равно {result:.2f}")

    elif operation == '3':
        number = float(input("Введите число для возведения в степень 3: "))
        result = number ** 3
        print(f"{number} в степени 3 равно {result:.2f}")

    elif operation == '4':
        number = float(input("Введите число: "))
        percentage = float(input("Введите процент: "))
        result = (number * percentage) / 100
        print(f"{percentage}% от {number} равно {result:.2f}")

    elif operation == '5':
        print("Обычный калькулятор: ")
        print("Доступные операции: +, -, *, /")
        num1 = float(input("Введите первое число: "))
        operator = input("Введите операцию (+, -, *, /): ")
        num2 = float(input("Введите второе число: "))

        if operator == '+':
            result = num1 + num2
        elif operator == '-':
            result = num1 - num2
        elif operator == '*':
            result = num1 * num2
        elif operator == '/':
            if num2 == 0:
                print("Ошибка! Деление на ноль.")
                return
            result = num1 / num2
        else:
            print("Неверная операция. Попробуйте снова.")
            return

        print(f"Результат операции {num1} {operator} {num2} равен {result:.2f}")

    else:
        print("Неверная операция. Попробуйте снова.")

if __name__ == "__main__":
    main()
