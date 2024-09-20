from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def q6_bot_consulta_jurisdicao():
    """Realizar uma busca de todas as comarcas, suas respectivas jurisdições e os juízes.

    A consulta é realizada através do site: https://www.tjpb.jus.br/comarcas/lista
    O bot deve interagir com cada comarca, abrindo o modal, coletando as informações 
    (ex.: vara única - juiz X)

    Saída esperada: {comarca: "", jurisdicoes: [{jurisdicao1: juiz1, jurisdicao2: juiz2}]}
    """
   
    options = Options()
    options.add_argument("--headless")
    
    browser = webdriver.Chrome(options=options)

    browser.get('https://www.tjpb.jus.br/comarcas/lista')
    wait = WebDriverWait(browser, 20)

    checkbox = browser.find_element(By.CSS_SELECTOR, "#exibir-desinstaladas> label")
    checkbox.click()
    comarcas = browser.find_elements(By.CSS_SELECTOR, ".col-xs-6.col-sm-3")
    
    results = []

    for index, comarca in enumerate(comarcas):
        print(f"lendo comarca {index+1} de {len(comarcas)}")
        comarca_nome = comarca.text.strip()
        
        try:           
            comarca.find_element(By.CSS_SELECTOR, '.link-modal-comarca').click()
            browser.execute_script("arguments[0].scrollIntoView(true);", comarca)
            time.sleep(0.2)
        except Exception as e:
            print(f'Erro ao clicar em {comarca_nome}: {e}')
            continue
        
       
        modal = wait.until(EC.visibility_of_element_located((By.ID, "modal-detalhes-comarca")))
        table = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "table-condensed")))
        jurisdicoes = []
        
        try:
            rows = table.find_elements(By.CSS_SELECTOR, '.table-condensed tbody tr')
            for row in rows:
                unidade = row.find_element(By.CSS_SELECTOR, 'td:first-child').text.strip()
                juiz = row.find_element(By.CSS_SELECTOR, 'td:last-child').text.strip()
                jurisdicoes.append({unidade:juiz})
        
        except Exception as e:
            print(f'Erro ao extrair informações de {comarca_nome}')
            continue

       
        try:
            wait.until(EC.element_to_be_clickable((By.CLASS_NAME, 'close')))
            fechar_modal = modal.find_element(By.CLASS_NAME, 'close')
            fechar_modal.click()
            time.sleep(0.1)
        except Exception as e:
            print(f'Erro ao fechar o modal para {comarca_nome}: {e}')
            continue
    
        
        results.append({
            'comarca': comarca_nome,
            'jurisdicoes': jurisdicoes
        })
      
    browser.quit()
    print("Concatenando dados .....")
    return results

print(q6_bot_consulta_jurisdicao())
