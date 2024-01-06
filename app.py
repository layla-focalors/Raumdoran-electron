import os
import datetime

while True:
    value = str(input('input your commit message : '))
    if(value == 'exit'):
        break
    elif(value[0:3] == 'npm'):
        os.system(f'{value}')
        continue
    elif(value[0:3] == 'npx'):
        os.system(f'{value}')
        continue
    elif(value[0:3] == 'pip'):
        os.system(f'{value}')
        continue
    os.system('git add .')
    os.system('git status')
    os.system(f'git commit -m "{value}"')
    os.system('git push')
    print(f"Last Commit : {datetime.datetime.now()}")