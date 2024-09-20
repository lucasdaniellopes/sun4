from collections import Counter
def q2_contar_frequencia_palavra(text):
    """Realiza uma contagem de quantas vezes uma determinada palavra ocorre
    Ao final, preferencialmente, ordenar o dicionário pelo volume de ocorrência

    Saída esperada: {'hello': 2, 'world': 1}
    """
    control = text.lower().split(' ')
    controlSet = set(control)
    sorting_list = []
    maior = 0
    menor =  0

    dictionary ={}

    for word in controlSet:
        if (num := control.count(word)) > menor:

            if num < maior:
                sorting_list.append(word)

            elif num > maior:
                maior = num
                sorting_list.insert(0, word)

    for name in sorting_list:
        dictionary[name] = control.count(name)
        

    return dictionary

print(q2_contar_frequencia_palavra("lucas Hello world hello lucas lucas lucas"))
