from random import randint

age = 13
cash  = 30
growth = 150

i = 0

los = randint(1,100)
odp = 10
a = 0


if not age > 12 or cash >= 30 and growth >=150:
    print("can come in")
else:
    print("CAN`T come in")

if True or False and False:
    print("True")
else:
    print("False")

if (True or False) and False:
    print("True")
else:
    print("False")




while i < 5:
    print("maka maka")
    print(i)
    i = i + 1
print("trolo lolo")

while True:
    print(i)
    i += 1
    if i >= 10: 
        break
print("finish")

while True:
    i += 1
    if i % 2 == 1:
        # przejście do kolejnego obiegu pętli dzieki continue 
        continue
    print(i)
    if i >= 20: 
        break
print("finish modulo")
 

print("zgadnij liczbę z przedziału 1-10")

# for a in range(100):
#     print(randint(1,10))
while odp != los: 
    a += 1
    print(odp)
    odp = int(input("Podaj liczbę: "))
    if odp > los:
        print("Niestety wylosowanna liczba jest MNIEJSZA od twojej")
    elif odp < los:
        print("Niestety wylosowanna liczba jest WIĘKSZA od twojej")
print("Wygrana, odgadłeś liczbę ! za ", a ," razem.")

