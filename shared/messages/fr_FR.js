export default {
  // titles and labels
  welcome_public: 'Bienvenue sur {{ title }}!',
  welcome_user: 'Bienvenue sur {{ title }}, {{user.firstName ? user.firstName : user.email.includes("@") ? user.email.substring(0, user.email.indexOf("@")) : user.email}}',
  title_login: 'Connexion',
  title_register: 'Créer un compte',
  title_verifying: 'Vérification de votre compte...',
  title_requestPasswordReset: 'Réinitialisez votre mot de passe',
  title_resetPassword: 'Définir un nouveau mot de passe',
  title_verifying_ended: 'Vérification terminée',
  title_profile: 'Information sur le compte',
  button_profile: 'Mon compte',
  button_update: 'commettre',
  button_delete_my_account: 'Supprimer mon compte (IMPOSSIBLE D\'ÊTRE ANNULÉ)',
  label_confirm_user_delete: 'Confirmez la suppression de votre compte. Cette action est irréversible!',
  label_firstName: 'Prénom',
  label_lastName: 'Nom',
  label_email: 'E-mail',
  label_password: 'Mot de passe',
  label_newPassword: 'Nouveau mot de passe',
  label_locale: 'Langue',
  label_token: 'Jeton de vérification',
  label_ctime: 'L\'eure de création',
  label_mtime: 'L\'heure modifiée',
  button_login: 'Connexion',
  button_logout: 'Se déconnecter',
  button_register: 'Créer un compte',
  button_forgot_password: 'Mot de passe oublié?',
  button_send_password_reset_email: 'Envoyer',
  button_set_new_password: 'Définir le mot de passe',
  info_password_reset_email_sent: 'Un e-mail a été envoyé à {{ email }}, vérifiez votre boîte de réception pour un lien pour réinitialiser votre mot de passe',
  info_password_reset_try_again: 'Réessayer',
  button_invite_friends: 'Invitez vos amis à {{ title }}!',
  button_close_invite_friends: 'ferme',
  label_friend_emails: 'Liste des e-mails séparés par des virgules, des espaces ou des retours à la ligne',
  button_send_invitations: 'Envoyez des invitations',
  info_invite_friends: 'Invitez vos amis à {{ title }}! Entrez quelques adresses e-mail ici et nous leur enverrons une invitation',
  info_invite_friends_limited_registration: 'L\'opérateur de {{ title }} a limité l\'inscription à des personnes spécifiques. Vous pouvez envoyer des invitations, mais ces utilisateurs doivent également être ajoutés à la liste approuvée des utilisateurs par l\'administrateur du site avant de pouvoir créer un compte avec succès',
  info_invite_friends_disabled_no_email: 'La fonctionnalité "inviter des amis" est désactivée car l\'e-mail n\'a pas été configuré sur {{ title }}',
  info_invitation_success_results: 'Votre invitation a été envoyée avec succès à {{ successCount }}amis',
  info_invitation_error_results: 'Votre invitation n\'a pas pu être envoyée à {{ errorCount }}amis',

  label_search: 'Chercher',
  button_search: 'Chercher',
  label_sort: 'Trier par',
  label_sort_order: 'ordre',
  label_sort_ascending: 'croissant',
  label_sort_descending: 'décroissant',

  // media browsing
  title_browsing_folder: 'Dossier: {{ folder }}',
  button_back_to: 'Retourner à {{ prefix }}',
  button_back_to_root_folder: 'Retour au niveau supérieur',
  label_media_unprocessed: '(non transformé)',
  button_show_thumbnails: 'affiche des vignettes',
  button_hide_thumbnails: 'masquer les vignettes',
  button_previous_thumbnail: 'précédent',
  button_next_thumbnail: 'suivant',
  label_selected_thumbnail: '~ vignette sélectionnée ~',
  button_select_thumbnail: 'sélectionnez cette vignette',
  info_no_thumbnails_found: '(aucune vignette trouvée)',
  button_show_metadata: 'afficher les métadonnées',
  button_hide_metadata: 'masquer les métadonnées',

  // vee-validate error types
  error_field_required: '{{ field }} est requis',
  error_field_invalid: '{{ field }} n\'est pas valide',
  error_field_regex: '{{ field }} n\'est pas valide',
  error_field_min: '{{ field }} est trop court',
  error_field_max: '{{ field }} est trop long',
  error_field_email: '{{ field }} n\'est pas une adresse e-mail valide',
  error_field_cannotDeleteSelf: 'Vous ne pouvez pas vous supprimer',
  error_field_readOnly: '{{ field }} ne peut pas être modifié',
  error_field_accountNotFound: 'Compte introuvable ou mot de passe incorrect',

  // Locale names -- add more translations if other locales are added
  locale_en_US: 'Anglais (EU)',
  locale_es_US: 'Espagnol (EU)',
  locale_es_ES: 'Espagnol',
  locale_it_IT: 'Italien',
  locale_fr_FR: 'Français',
  locale_de_DE: 'Allemand',
  locale_en_GB: 'Anglais (GB)',

  // Date/Calendar names
  label_date: '{{d}} {{MMM}} {{YYYY}}',
  label_date_short: '{{d}}/{{M}}/{{YYYY}}',
  label_date_and_time: '{{d}} {{MMM}} {{YYYY}} / {{h}}:{{m}}{{a}}',
  label_date_and_time_short: '{{d}}/{{M}}/{{YYYY}} {{h}}:{{m}}{{a}}',
  label_date_undefined: 'Date/heure non réglée',
  label_date_day_half_am: 'AM',
  label_date_day_half_pm: 'PM',
  label_date_day_0: 'dimanche',
  label_date_day_1: 'lundi',
  label_date_day_2: 'mardi',
  label_date_day_3: 'mercredi',
  label_date_day_4: 'jeudi',
  label_date_day_5: 'vendredi',
  label_date_day_6: 'samedi',
  label_date_day_short_0: 'dim.',
  label_date_day_short_1: 'lun.',
  label_date_day_short_2: 'mar.',
  label_date_day_short_3: 'mer.',
  label_date_day_short_4: 'jeu.',
  label_date_day_short_5: 'ven.',
  label_date_day_short_6: 'sam.',
  label_date_month_0: 'janvier',
  label_date_month_1: 'février',
  label_date_month_2: 'mars',
  label_date_month_3: 'avril',
  label_date_month_4: 'mai',
  label_date_month_5: 'juin',
  label_date_month_6: 'juillet',
  label_date_month_7: 'aout',
  label_date_month_8: 'septembre',
  label_date_month_9: 'octobre',
  label_date_month_10: 'novembre',
  label_date_month_11: 'décembre',
  label_date_month_short_0: 'janv.',
  label_date_month_short_1: 'févr.',
  label_date_month_short_2: 'mars',
  label_date_month_short_3: 'avr.',
  label_date_month_short_4: 'mai',
  label_date_month_short_5: 'juin',
  label_date_month_short_6: 'juil.',
  label_date_month_short_7: 'aout',
  label_date_month_short_8: 'sept.',
  label_date_month_short_9: 'oct.',
  label_date_month_short_10: 'nov.',
  label_date_month_short_11: 'déc.',
  label_date_month_number_0: '1',
  label_date_month_number_1: '2',
  label_date_month_number_2: '3',
  label_date_month_number_3: '3',
  label_date_month_number_4: '5',
  label_date_month_number_5: '6',
  label_date_month_number_6: '7',
  label_date_month_number_7: '8',
  label_date_month_number_8: '9',
  label_date_month_number_9: '10',
  label_date_month_number_10: '11',
  label_date_month_number_11: '12',

  // mediainfo fields
  label_mediainfo_title: 'Titre',
  label_mediainfo_artist: 'Artiste',
  label_mediainfo_album_artist: 'Artiste de l\'album',
  label_mediainfo_author: 'Auteur / auteure',
  label_mediainfo_composer: 'Compositeur / compositrice',
  label_mediainfo_year: 'An',
  label_mediainfo_copyright: 'Droits d\'auteur',
  label_mediainfo_album: 'Album',
  label_mediainfo_movie: 'Film',
  label_mediainfo_description: 'La description',
  label_mediainfo_comment: 'Commentaire',
  label_mediainfo_genre: 'Genre',
  label_mediainfo_location: 'Emplacement',
  label_mediainfo_show: 'Émission',
  label_mediainfo_episode: 'Épisode',
  label_mediainfo_episode_sort: 'Épisode (pour le tri)',
  label_mediainfo_season: 'Saison télévisée',
  label_mediainfo_lyrics: 'Paroles',
  label_mediainfo_tags: 'Mots clés',
  label_mediainfo_duration: 'Durée',
  label_mediainfo_width: 'Largeur',
  label_mediainfo_height: 'Hauteur',
  label_mediainfo_size: 'Taille',
  label_mediainfo_videoTracks: 'Pistes vidéo',
  label_mediainfo_audioTracks: 'Pistes audio',
  label_mediainfo_format: 'Format',
  label_mediainfo_contentType: 'Type de contenu',
  label_mediainfo_bitRate: 'Débit binaire',
  label_mediainfo_frameRate: 'Fréquence d\'images',
  label_mediainfo_dateEncoded: 'Date encodée',

  // Site Administration
  admin_title_site_administration: '{{ title }} Administration',
  admin_title_user_administration: 'Administration des utilisateurs',
  admin_title_migrate_users: 'Migrer les utilisateurs à partir de la clé de chiffrement précédente',
  admin_title_transform_queue: 'File d\'attente de transformation multimédia',

  // User Administration
  admin_label_total_user_count: '{{ totalUserCount }} utilisateurs au total',
  admin_button_delete_user: 'Supprimer l\'utilisateur',
  admin_label_confirm_user_delete: 'Veuillez confirmer la suppression de l\'utilisateur: {{ email }}',

  // Transform Queue
  admin_label_firstEvent: 'premier événement',
  admin_label_lastEvent: 'dernier événement',
  admin_label_eventTime: 'time',
  admin_label_eventName: 'événement',
  admin_label_eventDescription: 'description',

  // User Migration
  admin_label_migration_results: 'Résultats de la migration des utilisateurs:',
  admin_label_migration_oldKey: 'Clé de chiffrement précédente',
  admin_label_migration_oldIV: 'Vecteur d\'initialisation précédent (VI) (s\'il y en a un)',
  admin_button_migrate_users: 'Migrer les utilisateurs',
  admin_title_main_site: 'Retour à {{ title }}'
}
