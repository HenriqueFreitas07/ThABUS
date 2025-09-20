# ThABUS

Este é um projeto é realizado no âmbito da cadeira de IHC, que visa dar a conhecer as vantagens, desvantagens da utilização de diferentes questões de usabilidade durante o uso de, neste caso, uma aplicação mobile desenvolvida através da framework ionic 6.

## First Steps

É necessário inicialmente instalar a @ionic/cli, através do comando seguinte:

```bash
  npm install -g @ionic/cli
```

Depois da instalação da é necessário instalar todas as dependências a através do comando seguinte:

```bash
  npm i
```

Para correr a aplicação é executa-se o comando:

```bash
  ionic serve
```

## Documentação


| Ferramenta                 | Link                                               |
| -------------------------- | -------------------------------------------------- |
| TailwindCSS                | https://tailwindcss.com/docs/installation          |
| Ionic Components           | https://ionicframework.com/docs/components         |
| Ionic-React                | https://ionicframework.com/docs/react              |
| Ionic-CLI                  | https://ionicframework.com/docs/cli                |
| Ionic-CLI Para o Capacitor | https://ionicframework.com/docs/cli/commands/build |
| Premade Ionic Icons List   | https://ionic.io/ionicons                          |
| Gradle Automatation Tool   | https://gradle.org/                                |

### Gradle

O gradle é um software de automation tool, que permite a gestão de pacotes/depêndencias e bibliotecas, tal como a compilação do código java presente no projeto. Basicamente
ajuda o processo de compilação e inclusão de depêndencias.

### Capacitor

O Capacitor apresenta um ambiente de runtime nativo para Android que permite aos developers comunicarem entre JavaScript e Java nativo ou código Kotlin.
Os aplicativos Capacitor Android são configurados e geridos através do Android Studio.

## Compilação

Para a compilação da app em android é necessário a instalação dos seguintes pacotes

```bash
npm i @capacitor/android @capacitor/ios
```

Antes de compilar o programa é necessário que traduzir os web assets ( imagens, componentes, etc. ) através do comando build fornecido pela CLI:

```bash
ionic build #[options]
```

Agora para criar os projetos para android ou ios, o seguinte comando vai criar uma pasta para android ou para ios que mais tarde será aberto em android studio ou Xcode , respectivamente:

```bash
ionic cap add android
```

```bash
ionic cap add ios
```

```bash
# Durante a produção se estas pastas existirem basta sincronizar os web-assets com os projetos através de ...
ionic cap sync android
ionic cap sync ios
```

Para simplesmente abrir os projectos presentes nas pastas android e/ou ios executa-se o comando:

```bash
  ionic capacitor open android
```
```bash
  ionic capacitor open ios
```

Para basicamente executar todos estes comandos de uma só vez...

```bash
ionic cap build android
```

```bash
ionic cap build ios
```

