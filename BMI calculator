print("Калькулятор BMI")
print("1 - Американская система")
print("2 - Метрическая система")
choice = input("Выберите систему (1 или 2): ")
if choice == "1":
    feet = float(input("Рост (футы): "))
    inches = float(input("Рост (дюймы): "))
    pounds = float(input("Вес (фунты): "))
    height_m = feet * 0.3048 + inches * 0.0254
    weight_kg = pounds * 0.453592
elif choice == "2":
    height_m = float(input("Рост (метры): "))
    weight_kg = float(input("Вес (кг): "))
else:
    print("Неверный выбор")
    exit()
bmi = weight_kg / (height_m ** 2)
print("BMI:", round(bmi, 2))
if bmi < 18.5:
    print("Недостаточный вес")
elif bmi < 25:
    print("Нормальный вес")
elif bmi < 30:
    print("Избыточный вес")
else:
    print("Ожирение")
