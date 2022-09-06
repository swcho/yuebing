export default {
  id: 'pl',
  emoji: '🇵🇱',
  anonymous_user_name: 'tajemniczy',
  welcome_public: 'Witamy w {{ title }} !',
  welcome_user: 'Witamy w {{ title }} , {{user.firstName || user.email.includes("@") ? user.email.substring(0, user.email.indexOf("@")) : user.email}} !',
  title_login: 'Zaloguj się',
  title_register: 'Zapisać się',
  title_verifying: 'Weryfikuję konto...',
  title_requestPasswordReset: 'Zresetuj hasło',
  title_resetPassword: 'Ustaw nowe hasło',
  title_verifying_ended: 'Weryfikacja zakończona',
  title_profile: 'informacje o koncie',
  button_profile: 'Moje konto',
  button_update: 'ratować',
  info_profile_update: 'Informacje o Twoim koncie zostały pomyślnie zaktualizowane',
  button_reset_password: 'Zresetuj hasło',
  button_delete_my_account: 'Usuń moje konto (NIE MOŻNA COFNĄĆ)',
  label_confirm_user_delete: 'Potwierdź usunięcie swojego konta. Ta akcja jest nieodwracalna!',
  label_email: 'E-mail',
  label_username: 'Nazwa użytkownika',
  label_usernameOrEmail: 'Nazwa użytkownika lub email',
  label_firstName: 'Imię',
  label_lastName: 'Nazwisko',
  label_name: 'Nazwa',
  label_password: 'Hasło',
  label_newPassword: 'Nowe hasło',
  label_locale: 'Język',
  label_token: 'Token weryfikacyjny',
  label_ctime: 'Utworzony',
  label_mtime: 'Zmodyfikowane',
  button_login: 'Zaloguj się',
  button_logout: 'Wyloguj się',
  button_register: 'Zapisać się',
  button_forgot_password: 'Zapomniałeś hasła?',
  button_send_password_reset_email: 'Wysłać',
  button_set_new_password: 'Ustaw hasło',
  info_password_reset_email_sent: 'Wiadomość e-mail została wysłana na adres {{ email }} , sprawdź swoją skrzynkę odbiorczą, aby znaleźć link do zresetowania hasła',
  info_password_reset_email_error: 'Wystąpił błąd i Twoja wiadomość mogła nie zostać wysłana. Spróbuj ponownie później',
  info_password_reset_try_again: 'Spróbuj ponownie',
  info_verify_token_error: 'Token weryfikacyjny wygasł lub jest z innego powodu nieważny',
  info_registration_not_allowed: 'Operator {{ title }} wyłączył tworzenie konta',
  button_invite_friends: 'Zaproś znajomych do {{ title }} !',
  label_friend_emails: 'Lista e-maili oddzielonych przecinkami lub spacjami',
  button_send_invitations: 'Wysyłać zaproszenia',
  info_invite_friends_header: 'Zaproś znajomych do {{ title }} !',
  info_invite_friends_subheader: 'Wpisz tutaj adresy e-mail, a wyślemy im zaproszenie',
  info_invite_friends_limited_registration: 'Operator {{ title }} ograniczył rejestrację do określonych osób. Możesz wysyłać zaproszenia, ale ci użytkownicy muszą również zostać dodani do zatwierdzonej listy użytkowników przez administratora witryny, zanim będą mogli pomyślnie utworzyć konto',
  info_invite_friends_disabled_no_email: 'Funkcja „zaproś znajomych” jest wyłączona, ponieważ poczta e-mail nie została skonfigurowana w dniu {{ title }}',
  info_invite_friends_enabled_no_email: 'Funkcja „zaproś znajomych” jest włączona, ale poczta e-mail nie została skonfigurowana w {{ title }} , więc nie można z niej korzystać',
  info_invitation_success_results: 'Twoje zaproszenie zostało pomyślnie wysłane do {{ successCount }} znajomych',
  info_invitation_error_results: 'Twoje zaproszenie nie mogło zostać dostarczone do {{ errorCount }} znajomych',
  label_search: 'Szukaj',
  button_search: 'Szukaj',
  label_sort: 'Sortuj według',
  label_sort_order: 'Zamówienie',
  label_sort_ascending: 'rosnąco',
  label_sort_descending: 'malejąco',
  title_browsing_folder: 'Folder: {{ folder }}',
  button_back_to: 'Powrót do {{ prefix }}',
  button_back_to_root_folder: 'Powrót do najwyższego poziomu',
  info_search_no_results: 'Są czterysta cztery powody, dla których coś powinno tu być, ale tu nic nie ma',
  label_media_unprocessed: '(nieprzetworzone)',
  button_show_media_info: 'pokaż informacje o multimediach',
  button_hide_media_info: 'ukryj informacje o multimediach',
  button_show_thumbnails: 'Pokaż miniaturki',
  button_hide_thumbnails: 'ukryj miniatury',
  button_previous_thumbnail: 'poprzedni',
  button_next_thumbnail: 'następny',
  thumbnail_alt_text: 'obraz miniatury dla {{ name }}',
  label_selected_thumbnail: '~ wybrane ~',
  button_select_thumbnail: 'wybierz tę miniaturę',
  info_no_thumbnails_found: '(nie znaleziono miniatur)',
  button_show_metadata: 'pokaż metadane',
  button_hide_metadata: 'ukryj metadane',
  error_field_required: '{{ field }} jest wymagane',
  error_field_invalid: '{{ field }} nie jest ważny',
  error_field_regex: '{{ field }} nie jest ważny',
  error_field_min: '{{ field }} jest za krótki',
  error_field_max: '{{ field }} jest za długi',
  error_field_min_value: '{{ field }} jest za mały',
  error_field_max_value: '{{ field }} jest za duży',
  error_field_email: '{{ field }} nie jest prawidłowym adresem e-mail',
  error_field_cannotDeleteSelf: 'Nie możesz usunąć siebie',
  error_field_alreadyExists: '{{ thing }} z {{ field.toLowerCase() }} już istnieje',
  error_field_readOnly: '{{ field }} jest tylko do odczytu',
  error_field_accountNotFound: 'Nie znaleziono konta lub hasło jest nieprawidłowe',
  error_field_alreadyRegistered: 'Konto z tym {{ field.toLowerCase() }} już istnieje',
  error_field_registrationNotAllowed: 'Operator witryny wyłączył tworzenie konta',
  error_field_url: '{{ field }} nie jest prawidłowym adresem URL',
  error_field_host: '{{ field }} nie jest prawidłową nazwą hosta',
  error_field_locale: '{{ field }} nie jest prawidłowym językiem',
  error_field_source: '{{ field }} nie jest nazwą źródła. Używaj tylko liter, cyfr i tych znaków specjalnych: kropki (.), łącznika (-) i podkreślenia (_)',
  error_field_notFound: 'Nie można zlokalizować {{ field }}',
  error_field_path: '{{ field }} nie jest prawidłową ścieżką',
  error_field_cannotMirrorToSame: 'Źródło odczytu i źródło zapisu nie mogą być tym samym źródłem',
  error_field_raw_hex: '{{ field }} nie jest liczbą szesnastkową (niedozwolone pierwsze znaki 0x)',
  error_field_hex: '{{ field }} nie jest liczbą szesnastkową',
  error_field_username: '{{ field }} nie jest prawidłową nazwą użytkownika. Musi zaczynać się od litery i zawierać tylko litery, cyfry, podkreślenia (_), łączniki (-) i kropki (.)',
  locale_en: 'język angielski',
  locale_es: 'hiszpański',
  locale_it: 'Włoski',
  locale_fr: 'Francuski',
  locale_de: 'Niemiecki',
  locale_ar: 'arabski',
  locale_bn: 'bengalski',
  locale_hi: 'hinduski',
  locale_id: 'indonezyjski',
  locale_ja: 'język japoński',
  locale_ko: 'koreański',
  locale_pl: 'Polski',
  locale_pt: 'portugalski',
  locale_ru: 'Rosyjski',
  locale_ur: 'Urdu',
  locale_sw: 'suahili',
  locale_tl: 'tagalski',
  locale_vi: 'wietnamski',
  locale_zh: 'chiński',
  label_date: '{{MMM}} {{d}} , {{YYYY}}',
  label_date_short: '{{M}} / {{d}} / {{YYYY}}',
  label_date_and_time: '{{MMM}} {{d}} , {{YYYY}} / {{h}} : {{m}} {{a}}',
  label_date_and_time_short: '{{M}} / {{d}} / {{YYYY}} {{h}} : {{m}} {{a}}',
  label_date_undefined: 'Nie ustawiono daty/godziny',
  label_date_day_half_am: 'JESTEM',
  label_date_day_half_pm: 'PO POŁUDNIU',
  label_date_day_0: 'Niedziela',
  label_date_day_1: 'Poniedziałek',
  label_date_day_2: 'Wtorek',
  label_date_day_3: 'Środa',
  label_date_day_4: 'Czwartek',
  label_date_day_5: 'Piątek',
  label_date_day_6: 'Sobota',
  label_date_day_short_0: 'Słońce',
  label_date_day_short_1: 'pon',
  label_date_day_short_2: 'Wt',
  label_date_day_short_3: 'Poślubić',
  label_date_day_short_4: 'Czw',
  label_date_day_short_5: 'pt',
  label_date_day_short_6: 'Sat',
  label_date_month_0: 'Styczeń',
  label_date_month_1: 'Luty',
  label_date_month_2: 'Marsz',
  label_date_month_3: 'Kwiecień',
  label_date_month_4: 'Może',
  label_date_month_5: 'Czerwiec',
  label_date_month_6: 'Lipiec',
  label_date_month_7: 'Sierpień',
  label_date_month_8: 'Wrzesień',
  label_date_month_9: 'Październik',
  label_date_month_10: 'Listopad',
  label_date_month_11: 'Grudzień',
  label_date_month_short_0: 'Jan',
  label_date_month_short_1: 'luty',
  label_date_month_short_2: 'Zniszczyć',
  label_date_month_short_3: 'kwiecień',
  label_date_month_short_4: 'Może',
  label_date_month_short_5: 'Czerwiec',
  label_date_month_short_6: 'Lipiec',
  label_date_month_short_7: 'Sierpnia',
  label_date_month_short_8: 'Sep',
  label_date_month_short_9: 'Październik',
  label_date_month_short_10: 'Listopad',
  label_date_month_short_11: 'Grudzień',
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
  label_duration_days: 'dni',
  label_duration_hours: 'godziny',
  label_duration_minutes: 'minuty',
  label_duration_seconds: 'sekundy',
  hint_readonly: '(tylko czytać)',
  label_mediainfo_title: 'Tytuł',
  label_mediainfo_artist: 'Artysta',
  label_mediainfo_album_artist: 'Album artysty',
  label_mediainfo_author: 'Autor',
  label_mediainfo_composer: 'Kompozytor',
  label_mediainfo_year: 'Rok',
  label_mediainfo_copyright: 'prawa autorskie',
  label_mediainfo_album: 'Album',
  label_mediainfo_movie: 'Film',
  label_mediainfo_description: 'Opis',
  label_mediainfo_comment: 'Komentarz',
  label_mediainfo_genre: 'Gatunek muzyczny',
  label_mediainfo_location: 'Lokalizacja',
  label_mediainfo_show: 'Pokazać',
  label_mediainfo_episode: 'Epizod',
  label_mediainfo_episode_sort: 'Odcinek (sortowanie)',
  label_mediainfo_season: 'Pora roku',
  label_mediainfo_lyrics: 'tekst piosenki',
  label_mediainfo_tags: 'Tagi',
  label_mediainfo_duration: 'Czas trwania',
  label_mediainfo_width: 'Szerokość',
  label_mediainfo_height: 'Wzrost',
  label_mediainfo_size: 'Rozmiar',
  label_mediainfo_videoTracks: 'Ścieżki wideo',
  label_mediainfo_audioTracks: 'Ścieżki audio',
  label_mediainfo_format: 'Format',
  label_mediainfo_contentType: 'Typ zawartości',
  label_mediainfo_bitRate: 'Szybkość transmisji',
  label_mediainfo_frameRate: 'Częstotliwość wyświetlania klatek',
  label_mediainfo_dateEncoded: 'Zakodowana data',
  button_admin: 'Konfiguracja witryny',
  admin_title_site_administration: '{{ title }} Administracja',
  admin_title_manage_configuration: 'Konfiguracja systemu',
  admin_title_source_administration: 'Administracja źródła',
  admin_title_user_administration: 'Administracja użytkownika',
  admin_title_migrate_data: 'Przenieś dane',
  admin_title_transform_queue: 'Kolejka transformacji mediów',
  admin_title_site_administration_publicConfig: 'Konfiguracja publiczna',
  admin_title_site_administration_privateConfig: 'Konfiguracja prywatna',
  admin_button_save_config: 'Ratować',
  admin_info_config_updated: 'Pomyślnie zaktualizowano konfigurację systemu',
  admin_label_publicConfig_title: 'Nazwa strony',
  admin_label_publicConfig_siteUrl: 'Strona URL',
  admin_label_publicConfig_public: 'Publiczny?',
  admin_label_publicConfig_allowRegistration: 'Zezwól na rejestrację?',
  admin_label_publicConfig_limitRegistration: 'Ogranicz rejestrację',
  admin_label_publicConfig_inviteFriendsEnabled: 'Pokazać „Zaproś znajomych” zalogowanym użytkownikom?',
  admin_label_publicConfig_locales: 'Lokalizacje',
  admin_label_publicConfig_defaultLocale: 'Domyślne ustawienia regionalne',
  admin_label_publicConfig_emailEnabled: 'Poczta e-mail włączona?',
  admin_label_publicConfig_timeout: 'Limity czasu',
  admin_label_publicConfig_timeout_verify: 'Limit czasu tokena weryfikacji konta',
  admin_label_publicConfig_timeout_resetPassword: 'Zresetuj limit czasu tokena hasła',
  admin_label_privateConfig_admin: 'Ustawienia administratora',
  admin_label_privateConfig_admin_user: 'Administrator',
  admin_label_privateConfig_admin_user_email: 'E-mail',
  admin_label_privateConfig_admin_user_username: 'Nazwa użytkownika',
  admin_label_privateConfig_admin_user_password: 'Hasło',
  admin_label_privateConfig_admin_user_firstName: 'Imię',
  admin_label_privateConfig_admin_user_lastName: 'Nazwisko',
  admin_label_privateConfig_admin_user_locale: 'Widownia',
  admin_label_privateConfig_admin_overwrite: 'Przepisać?',
  admin_label_privateConfig_email: 'Ustawienia SMTP',
  admin_label_privateConfig_email_host: 'Gospodarz',
  admin_label_privateConfig_email_port: 'Port',
  admin_label_privateConfig_email_user: 'Nazwa użytkownika',
  admin_label_privateConfig_email_password: 'Hasło',
  admin_label_privateConfig_email_secure: 'Bezpieczne?',
  admin_label_privateConfig_email_fromEmail: 'Systemowy adres e-mail',
  admin_label_privateConfig_redis: 'Ustawienia Redis',
  admin_label_privateConfig_redis_host: 'Gospodarz',
  admin_label_privateConfig_redis_port: 'Port',
  admin_label_privateConfig_redis_flushAtStartup: 'Flush przy starcie?',
  admin_label_privateConfig_redis_listingCacheExpiration: 'Wygaśnięcie pamięci podręcznej aukcji',
  admin_label_privateConfig_redis_manifestCacheExpiration: 'Wygaśnięcie pamięci podręcznej manifestu',
  admin_label_privateConfig_media: 'Wsparcie dla mediów',
  admin_label_privateConfig_media_video: 'Wideo',
  admin_label_privateConfig_media_video_allowedCommands: 'Dozwolone polecenia',
  admin_label_privateConfig_encryption: 'Ustawienia szyfrowania',
  admin_label_privateConfig_encryption_key: 'Klucz szyfrowania',
  admin_label_privateConfig_encryption_iv: 'Wektor inicjujący (IV)',
  admin_label_privateConfig_encryption_algo: 'Algorytm',
  admin_label_privateConfig_encryption_bcryptRounds: 'Bcrypt rundy',
  admin_label_privateConfig_session: 'Ustawienia sesji',
  admin_label_privateConfig_session_expiration: 'Limit czasu sesji',
  admin_label_privateConfig_autoscan: 'Ustawienia automatycznego skanowania',
  admin_label_privateConfig_autoscan_enabled: 'Włącz automatyczne skanowanie',
  admin_label_privateConfig_autoscan_interval: 'Regularny interwał skanowania',
  admin_label_privateConfig_autoscan_initialDelay: 'Opóźnienie skanowania przy starcie',
  admin_label_privateConfig_autoscan_showTransformOutput: 'Dane wyjściowe przekształcenia dziennika?',
  admin_label_privateConfig_autoscan_cleanupTemporaryAssets: 'Usunąć pliki tymczasowe?',
  admin_label_privateConfig_autoscan_deleteIncompleteUploads: 'Usunąć niekompletne przesyłanie?',
  admin_label_privateConfig_autoscan_concurrency: 'Konkurencja',
  admin_label_total_user_count: '{{ totalUserCount }} wszystkich użytkowników',
  admin_button_delete_user: 'Usuń użytkownika',
  admin_label_confirm_user_delete: 'Potwierdź usunięcie użytkownika: {{ email }}',
  label_configCategory: 'Kategoria konfiguracji',
  admin_button_add_source: 'Dodaj źródło',
  admin_title_add_source: 'Dodaj źródło',
  admin_button_delete_source: 'Usuń źródło',
  admin_button_scan_source: 'Skanowanie',
  admin_info_scan_scanning: 'Łów...',
  admin_info_scan_successful: 'Skanowanie rozpoczęło się pomyślnie',
  admin_info_scan_error: 'Wystąpił błąd podczas skanowania',
  admin_label_confirm_source_delete: 'Potwierdź usunięcie źródła: {{ source }}',
  admin_info_source_added: 'Nowe źródło &#39; {{ source }} &#39; zostało pomyślnie dodane',
  admin_info_source_add_error: 'Wystąpił błąd podczas dodawania źródła &#39; {{ source }} &#39;',
  admin_label_source_name: 'Nazwa źródła',
  admin_label_self_source: '{{ title }} przechowywanie',
  admin_label_source_type: 'rodzaj źródła',
  admin_label_source_readOnly: 'Tylko czytać?',
  admin_label_source_cacheSize: 'Rozmiar pamięci podręcznej aukcji (zero, aby wyłączyć)',
  admin_label_source_encryption_enable: 'Włącz szyfrowanie',
  admin_label_source_encryption_key: 'Klucz szyfrowania',
  admin_label_source_encryption_iv: 'Wektor inicjujący (IV)',
  admin_label_source_encryption_algo: 'Algorytm',
  label_sourceType_local: 'Lokalny system plików',
  label_sourceType_local_field_baseDir: 'Katalog montowania',
  label_sourceType_local_field_mode: 'Tryb tworzenia pliku/katalogu',
  label_sourceType_s3: 'Amazonka S3',
  label_sourceType_s3_field_key: 'Klucz dostępu AWS',
  label_sourceType_s3_field_secret: 'Klucz tajny AWS',
  label_sourceType_s3_field_bucket: 'Wiadro S3',
  label_sourceType_s3_field_region: 'Region AWS',
  label_sourceType_s3_field_prefix: 'Prefiks zasobnika',
  label_sourceType_s3_field_delimiter: 'Ogranicznik',
  label_sourceType_b2: 'Backblaze B2',
  label_sourceType_b2_field_key: 'Identyfikator klucza',
  label_sourceType_b2_field_secret: 'Klucz aplikacji',
  label_sourceType_b2_field_bucket: 'Identyfikator zasobnika B2 (nie nazwa)',
  label_sourceType_b2_field_partSize: 'Rozmiar części',
  label_sourceType_b2_field_prefix: 'Prefiks zasobnika',
  label_sourceType_b2_field_delimiter: 'Ogranicznik',
  admin_label_firstEvent: 'pierwsze wydarzenie',
  admin_label_lastEvent: 'ostatnie wydarzenie',
  admin_label_eventTime: 'czas',
  admin_label_eventName: 'wydarzenie',
  admin_label_eventDescription: 'opis',
  admin_label_xformQueueEmpty: 'Brak aktywnych ofert pracy',
  admin_label_migration_noSources: 'Brak zdefiniowanych źródeł',
  admin_label_migration_results: 'Wyniki migracji:',
  admin_label_migration_readSource: 'Źródło do migracji danych z',
  admin_label_migration_readPath: 'Odczyt ze ścieżki (puste dla katalogu głównego systemu plików)',
  admin_label_readSource: 'Przeczytaj źródło',
  admin_label_readPath: 'Przeczytaj ścieżkę',
  admin_label_migration_writeSource: 'Źródło do zapisu danych',
  admin_label_migration_writePath: 'Napisz do ścieżki (pusta dla katalogu głównego systemu plików)',
  admin_label_writeSource: 'Wpisz źródło',
  admin_label_writePath: 'Napisz ścieżkę',
  admin_button_migrate_data: 'Przenieś dane',
  admin_info_migration_success: 'Dane zostały pomyślnie przeniesione',
  admin_info_migration_error: 'Wystąpił błąd podczas migracji danych',
  http_invalid_request_method: 'Metoda żądania HTTP {{ method }} nie jest obsługiwana przez ten punkt końcowy',
  locale_ha: 'Hausa',
  locale_mr: 'Maranthi',
  locale_tr: 'turecki'
}