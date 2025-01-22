# Manual de Utilização do Sistema/Site

## Capítulo 1 - Configuração do Git no Computador

### Instalação do Git

Para instalar o Git no Windows, acesse o link abaixo e siga as instruções:

[Instalar Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)

#### Verificando a Versão do Git Instalado

Após a instalação, verifique se o Git foi instalado corretamente executando o seguinte comando no terminal:

```bash
git --version
```

Se o comando funcionar corretamente, você verá a versão instalada. Exemplo de saída:

<p align="center">
    <img src="docs/images/GitVersion.png" width="400" alt="Exemplo de comando git --version">
</p>

---

### Comandos Administrativos do Git

Aqui estão alguns comandos básicos e suas respectivas descrições:

1. **Verificar o status dos arquivos no repositório**:

```bash
git status
```

2. **Adicionar arquivos ao área de staging**:

Para adicionar um arquivo específico:

```bash
git add index.html
```

Ou para adicionar todos os arquivos:

```bash
git add .
```

3. **Criar um commit com uma mensagem descritiva**:

```bash
git commit -m "Mensagem do desenvolvedor"
```

Exemplo de mensagem: 

```bash
git commit -m "Update file README"
```

4. **Enviar alterações para o repositório remoto**:

```bash
git push -u origin master
```

Ou, caso esteja utilizando a branch `main`:

```bash
git push -u origin main
```

---

## Capítulo 2 - Criando Repositório no Git

*Conteúdo a ser adicionado...*