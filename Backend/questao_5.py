from datetime import datetime, timedelta

def q5_calculo_prazo(data, prazo, tipo):
    """A partir de uma data, realiza o cálculo de prazos considerando o tipo de contagem.

    O tipo pode ser CORRIDO ou UTEIS.
    Caso seja UTEIS, apenas serão contados os dias segunda, terça, quarta, quinta e sexta, excluindo feriados.
    Caso seja CORRIDO, deve-se incluir na contagem também o sábado e o domingo.

    A contagem deve sempre iniciar do dia seguinte (o dia atual não é contado).

    Saída esperada: 
    Data 16/09/2024, prazo de 7 dias úteis, a data final é no dia 25/09/2024 e para os dias corridos 23/09/2024

    Retorna a data final do prazo."""

    data_inicial = datetime.strptime(data, "%d/%m/%Y")
    dias_contados = 0
    data_final = data_inicial
    tipo = tipo.upper()


    match tipo:
        case "CORRIDOS":
            data_final = data_inicial + timedelta(days=prazo)
        case "UTEIS":
            while dias_contados < prazo:
                data_final += timedelta(days=1)
                if data_final.weekday() < 5:  
                    dias_contados += 1
        case _:
            return "Tipo de contagem inválido. Use 'CORRIDOS' ou 'UTEIS'."    

    return data_final.strftime("%d/%m/%Y")


print(q5_calculo_prazo("16/09/2024", 7, "UTEIS"))
print(q5_calculo_prazo("16/09/2024", 7, "CORRIDOS"))






