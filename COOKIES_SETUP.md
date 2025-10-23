# Configuration de la gestion des Cookies RE·GEN

## ✅ Installation complète

Votre système de gestion des cookies est maintenant opérationnel ! Voici ce qui a été mis en place :

## 🎨 Fonctionnalités

### 1. **Bandeau de consentement luxueux**
- Design cohérent avec l'identité visuelle RE·GEN
- Texture papier et glassmorphisme
- 3 options : Accepter tout, Refuser tout, Personnaliser
- Animation douce d'apparition

### 2. **Modal de personnalisation**
- Interface élégante pour choisir les catégories de cookies
- Explications claires pour chaque catégorie
- Toggles interactifs
- Sauvegarde des préférences

### 3. **Catégories de cookies**

#### Cookies essentiels (toujours actifs)
- Session de navigation
- Panier de réservation
- Sécurité CSRF
- Pas besoin de consentement

#### Cookies de préférences (optionnels)
- Choix de langue
- Préférences d'affichage
- Mémorisation des choix

#### Cookies analytiques (optionnels)
- Google Analytics 4 avec anonymisation IP
- Pas de remarketing
- Pas de publicité
- Données agrégées uniquement

### 4. **Gestion RGPD complète**
- Consentement explicite
- Expiration après 6 mois (redemande automatique)
- Possibilité de modifier les préférences à tout moment
- Stockage local sécurisé

## 🚀 Configuration Google Analytics

**IMPORTANT:** Pour activer Google Analytics, vous devez remplacer l'ID de mesure :

### Étape 1 : Créer un compte Google Analytics 4

1. Allez sur https://analytics.google.com/
2. Créez une propriété GA4
3. Notez votre ID de mesure (format : `G-XXXXXXXXXX`)

### Étape 2 : Ajouter votre ID

Ouvrez le fichier `src/contexts/CookieConsentContext.tsx` et remplacez :

```typescript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // LIGNE 71
```

Par votre véritable ID :

```typescript
const GA_MEASUREMENT_ID = 'G-VOTRE-ID-ICI';
```

### Étape 3 : Configuration Privacy-First (déjà configuré)

Le code GA4 est configuré avec les paramètres suivants pour respecter la vie privée :

```typescript
gtag('config', GA_MEASUREMENT_ID, {
  'anonymize_ip': true,                        // Anonymisation IP
  'allow_google_signals': false,               // Pas de signaux Google
  'allow_ad_personalization_signals': false,   // Pas de publicité personnalisée
  'cookie_flags': 'SameSite=None;Secure'      // Cookies sécurisés
});
```

## 📁 Fichiers créés

```
src/
├── contexts/
│   └── CookieConsentContext.tsx    # Contexte et logique de gestion
├── components/
│   └── CookieBanner.tsx            # Bandeau + Modal de personnalisation
└── App.tsx                          # Intégration du provider
```

## 🎯 Utilisation

### Dans votre code (si besoin)

```typescript
import { useCookieConsent } from '@/contexts/CookieConsentContext';

function MonComposant() {
  const { hasConsent, openSettings } = useCookieConsent();

  // Vérifier si l'utilisateur a consenti aux cookies analytiques
  if (hasConsent('analytics')) {
    // Charger un script analytics supplémentaire par exemple
  }

  // Ouvrir les paramètres manuellement
  return <button onClick={openSettings}>Paramètres cookies</button>;
}
```

### Lien dans le footer

Un bouton "Gérer mes cookies" a été ajouté dans le footer pour permettre aux utilisateurs de modifier leurs préférences à tout moment.

## 🔒 Conformité RGPD

✅ **Consentement explicite** : L'utilisateur doit choisir activement
✅ **Granularité** : Choix par catégorie de cookies
✅ **Révocabilité** : Possibilité de modifier à tout moment
✅ **Information** : Explications claires sur chaque catégorie
✅ **Expiration** : Redemande après 6 mois
✅ **Stockage local** : Pas de serveur externe

## 🎨 Personnalisation du design

Le bandeau et le modal utilisent vos classes Tailwind existantes :
- `font-display` : Playfair Display (titres)
- `font-body` : Inter (corps de texte)
- `brand-400/500` : Couleurs or
- `laboratory-50` : Fond laboratoire
- Texture SVG noise

## 📊 Données collectées (si Analytics activé)

Avec le consentement de l'utilisateur, Google Analytics collecte :
- Pages visitées
- Durée des visites
- Source de trafic (Google, réseaux sociaux, direct)
- Type d'appareil (mobile, desktop)
- Navigateur utilisé

**Données NON collectées :**
- Adresses IP (anonymisées)
- Informations personnelles
- Données publicitaires
- Tracking cross-site

## 🧪 Test de la fonctionnalité

1. **Première visite** : Le bandeau apparaît en bas de page
2. **Accepter tout** : Tous les cookies sont activés, GA4 se charge
3. **Refuser tout** : Seuls les cookies essentiels sont actifs
4. **Personnaliser** : Modal s'ouvre pour choisir les catégories
5. **Gérer mes cookies** (footer) : Réouvre le bandeau pour modifier

## 🔧 Désactiver temporairement le bandeau

Pour tester sans voir le bandeau, supprimez la clé dans localStorage :

```javascript
// Dans la console du navigateur
localStorage.removeItem('regen-cookie-consent');
```

## 📝 Notes importantes

1. **Premier affichage** : Le bandeau s'affiche uniquement lors de la première visite ou si le consentement a expiré (6 mois)

2. **LocalStorage** : Les préférences sont stockées localement, elles persistent entre les sessions

3. **Google Analytics** : Le script GA4 est chargé dynamiquement UNIQUEMENT si l'utilisateur consent aux cookies analytiques

4. **Performance** : Aucun impact sur les performances initiales, le script GA4 est chargé en asynchrone

5. **Mobile-friendly** : Le design est entièrement responsive

## 🎯 Prochaines étapes recommandées

1. ✅ Créer votre compte Google Analytics 4
2. ✅ Ajouter votre ID de mesure dans `CookieConsentContext.tsx`
3. ✅ Tester le bandeau sur différents navigateurs
4. ✅ Vérifier que GA4 fonctionne dans le tableau de bord Google Analytics
5. ⚠️ Ajouter une politique de cookies détaillée (déjà créée : `/cookies`)

## 🆘 Support

En cas de problème :
- Vérifiez la console du navigateur pour les erreurs
- Vérifiez que l'ID Google Analytics est correct
- Testez en navigation privée pour simuler une première visite
- Supprimez `regen-cookie-consent` du localStorage pour réinitialiser

## 🌟 Avantages de cette solution

✅ Conformité RGPD totale
✅ Design luxe cohérent avec RE·GEN
✅ Aucune dépendance externe (sauf GA4 si consenti)
✅ Légère et performante
✅ Privacy-first (anonymisation, pas de pub)
✅ Expérience utilisateur optimale
✅ Code maintenable et documenté

---

**Votre système de cookies RE·GEN est prêt à l'emploi ! 🎉**
