level = int(input())

for baris in range(level):
    for kolom in range(level):
        if baris == kolom or kolom == level-(baris+1) or kolom == 0 or kolom == level-1 or baris == 0 or baris == level-1:
            print("*", end="")
        else: 
            print(" ", end="")
    print()
