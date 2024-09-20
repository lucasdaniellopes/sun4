def q4_converter_arrays_em_dict(arr1, arr2):
    """Converter os arrays recebidos em um dicionário. O arr1 deve ser utilizado como chaves e o arr2 como valores.
    
    Saída esperada: {chave: valor, chave2: valor2}"""
    return dict(zip(arr1, arr2))

CHAVES = ['data_distribuicao', 'valor_da_causa', 'classe_judicial', 'assunto']
VALORES = ['14/04/2024', 'R$ 810,26', 'EXECUÇÃO DE TÍTULO EXTRAJUDICIAL (12154)', 'Nota Promissória (4980)']
print(q4_converter_arrays_em_dict(CHAVES, VALORES))