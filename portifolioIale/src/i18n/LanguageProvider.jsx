import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './LanguageContext'
import { textos } from './textos'

const CHAVE = 'idioma'

function idiomaInicial() {
    try {
        const salvo = localStorage.getItem(CHAVE)
        if (salvo === 'pt' || salvo === 'en') return salvo
    } catch {
        // localStorage indisponível: segue com o padrão
    }
    return 'pt'
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(idiomaInicial)

    useEffect(() => {
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
        try {
            localStorage.setItem(CHAVE, lang)
        } catch {
            // ignora
        }
    }, [lang])

    const valor = useMemo(
        () => ({
            lang,
            setLang,
            t: textos[lang],
            // escolhe o texto no idioma atual a partir de { pt, en }
            tr: (obj) => (obj ? obj[lang] : ''),
        }),
        [lang],
    )

    return <LanguageContext.Provider value={valor}>{children}</LanguageContext.Provider>
}
