# 🚀 Installation Simple - Méliès Online Amélioré

## ⚡ Installation en 3 Étapes

### 1. **Décompresser**
Décompressez ce fichier ZIP à la racine de votre projet existant.
Il remplacera automatiquement les fichiers existants et créera la nouvelle structure.

### 2. **Configurer**
```bash
# Copier le fichier d'environnement
cp .env.example .env

# Éditer .env avec vos vraies valeurs Vimeo
nano .env  # ou votre éditeur préféré
```

**Variables importantes à modifier dans .env :**
```
VIMEO_CLIENT_ID=votre_vrai_client_id
VIMEO_CLIENT_SECRET=votre_vrai_client_secret  
VIMEO_ACCESS_TOKEN=votre_vrai_access_token
JWT_SECRET=générez-une-clé-secrète-de-32-caractères-minimum
```

### 3. **Installer et Lancer**
```bash
# Installer les dépendances
npm install

# Lancer le serveur
npm start
```

## ✅ **C'est Tout !**

Votre site amélioré sera accessible sur http://localhost:3000

## 🔐 **Comptes de Test**

Les comptes par défaut ont été mis à jour avec des mots de passe sécurisés :
- **admin** : Secret123
- **teacher1** : Secret123  
- **student1** : Secret123

## 🆘 **En cas de Problème**

1. Vérifiez que votre fichier `.env` est bien configuré
2. Assurez-vous d'avoir Node.js 18+ installé
3. Vérifiez que le port 3000 n'est pas utilisé

**Votre site est maintenant sécurisé et prêt pour la production ! 🎉**

