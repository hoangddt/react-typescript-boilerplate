interface ResourceProp {
    [key: string]: any | undefined
}

let registerLang = (name: string, data: object) => {
    
}


class LanguageRegister {
    private static instance: LanguageRegister;
    private resources:ResourceProp;
    private constructor() { 
        this.resources = {};
    }


    public static getInstance(): LanguageRegister {
        if (!LanguageRegister.instance) {
            LanguageRegister.instance = new LanguageRegister();
        }

        return LanguageRegister.instance;
    }


    public registerLanguage(name: string, data: object) {
        let value = {
            translation: data
        }
        this.resources[name] = value;
        return this;
    }

    public getI18nResourceData() {
        return this.resources;
    }
}


const registerLanguage = (name: string, data: object) => {
    let register = LanguageRegister.getInstance();
    return register.registerLanguage(name, data);
}

const getI18nResourceData = () => {
    return LanguageRegister.getInstance().getI18nResourceData();
}

export {
    registerLanguage,
    getI18nResourceData
};