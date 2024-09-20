def q3_tratar_datas(data):
    """Tratar e converter datas para o formato americano AAAA-MM-DD.
        Sa da esperada: 2022-11-30"""
    months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho","julho",
              "agosto", "setembro", "outubro", "novembro", "dezembro"]
    
    try: 
        
        try:
            dd, mm, yyyy = data.split('/')
        except:
            dd, mm, yyyy = data.split('-')

        if  len(mm) == 1:
            mm = f'0{mm}'

        if  len(dd) == 1:
            dd = f'0{dd}'
        
        data = f'{yyyy}-{mm}-{dd}'

    except: 
        dates = data.split(' ')
        for item in dates[::-1]:
            if item == 'de':
                dates.remove(item)
        
        dd, mm, yyyy = dates

        mm = mm.lower()

        for month in months:
            
            if mm in month:

                number = months.index(month)
        
        mm = number + 1

        mm = f'{int(mm):02d}'  
        dd = f'{int(dd):02d}'
        data = f'{yyyy}-{mm}-{dd}' 
    
    
    return data

DATAS_PARA_TRATAR = [
    '30/11/2022',
    '01 dez 2022', 
    '25/12/2022', 
    '31 de dezembro de 2022'
]

for data in DATAS_PARA_TRATAR:
    print(q3_tratar_datas(data))
