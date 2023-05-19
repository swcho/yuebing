export default {
  id: 'tl',
  emoji: '🇵🇭',
  anonymous_user_name: 'misteryoso',
  welcome_public: 'Maligayang pagdating sa {{ title }} !',
  welcome_user: 'Maligayang pagdating sa {{ title }} , {{user.firstName || user.email.includes("@") ? user.email.substring(0, user.email.indexOf("@")) : user.email}} !',
  title_login: 'Mag-sign In',
  title_register: 'Mag-sign Up',
  title_verifying: 'Bine-verify ang account...',
  title_requestPasswordReset: 'I-reset ang password',
  title_resetPassword: 'Magtakda ng bagong password',
  title_verifying_ended: 'Natapos ang pag-verify',
  title_profile: 'Impormasyon ng Account',
  button_profile: 'Aking Account',
  button_update: 'iligtas',
  info_profile_update: 'Matagumpay na na-update ang impormasyon ng iyong account',
  button_reset_password: 'I-reset ang password',
  button_delete_my_account: 'Tanggalin ang aking account (HINDI MAIBABALIK)',
  label_confirm_user_delete: 'Kumpirmahin ang pagtanggal ng iyong account. Ang pagkilos na ito ay hindi na mababawi!',
  label_email: 'Email',
  label_username: 'Username',
  label_usernameOrEmail: 'Username o email',
  label_firstName: 'Pangalan',
  label_lastName: 'Huling pangalan',
  label_name: 'Pangalan',
  label_password: 'Password',
  label_newPassword: 'Bagong password',
  label_locale: 'Wika',
  label_token: 'Token sa pagpapatunay',
  label_ctime: 'Nilikha',
  label_mtime: 'Binago',
  button_login: 'Mag-sign In',
  button_logout: 'Mag-sign Out',
  button_register: 'Mag-sign Up',
  button_forgot_password: 'Nakalimutan ang iyong password?',
  button_send_password_reset_email: 'Ipadala',
  button_set_new_password: 'Itakda ang Password',
  info_password_reset_email_sent: 'Isang mensaheng email ang ipinadala sa {{ email }} , tingnan ang iyong inbox para sa isang link upang i-reset ang iyong password',
  info_password_reset_email_error: 'Nagkaroon ng error at maaaring hindi naipadala ang iyong mensahe. Subukang muli mamaya',
  info_password_reset_try_again: 'Subukan muli',
  info_verify_token_error: 'Ang token ng pagpapatunay ay nag-expire na o kung hindi man ay hindi wasto',
  info_registration_not_allowed: 'Ang operator ng {{ title }} ay hindi pinagana ang paggawa ng account',
  button_invite_friends: 'Anyayahan ang iyong mga kaibigan na {{ title }} !',
  label_friend_emails: 'Listahan ng mga email na pinaghihiwalay ng mga kuwit o espasyo',
  button_send_invitations: 'Magpadala ng mga imbitasyon',
  info_invite_friends_header: 'Anyayahan ang iyong mga kaibigan na {{ title }} !',
  info_invite_friends_subheader: 'Maglagay ng ilang email address dito at padadalhan namin sila ng imbitasyon',
  info_invite_friends_limited_registration: 'Ang operator ng {{ title }} ay may limitadong pagpaparehistro sa mga partikular na tao. Maaari kang magpadala ng mga imbitasyon, ngunit ang mga user na ito ay dapat ding idagdag sa naaprubahang listahan ng mga user ng administrator ng site bago sila matagumpay na makalikha ng isang account',
  info_invite_friends_disabled_no_email: 'Ang tampok na &quot;mag-imbita ng mga kaibigan&quot; ay hindi pinagana dahil ang email ay hindi pa na-configure sa {{ title }}',
  info_invite_friends_enabled_no_email: 'Ang tampok na &quot;mag-imbita ng mga kaibigan&quot; ay pinagana ngunit ang email ay hindi pa na-configure sa {{ title }} , kaya hindi ito magagamit',
  info_invitation_success_results: 'Ang iyong imbitasyon ay matagumpay na naipadala sa {{ successCount }} kaibigan',
  info_invitation_error_results: 'Ang iyong imbitasyon ay hindi maihatid sa {{ errorCount }} kaibigan',
  label_search: 'Maghanap',
  button_search: 'Maghanap',
  label_sort: 'Pagbukud-bukurin ayon sa',
  label_sort_order: 'Umorder',
  label_sort_ascending: 'pataas',
  label_sort_descending: 'bumababa',
  title_browsing_folder: 'Folder: {{ folder }}',
  button_back_to: 'Bumalik sa {{ prefix }}',
  button_back_to_root_folder: 'Bumalik sa pinakamataas na antas',
  info_search_no_results: 'Mayroong apat na raan at apat na dahilan kung bakit dapat narito ang isang bagay, ngunit wala dito',
  label_media_unprocessed: '(hindi naproseso)',
  button_show_media_info: 'ipakita ang impormasyon ng media',
  button_hide_media_info: 'itago ang impormasyon ng media',
  button_show_thumbnails: 'ipakita ang mga thumbnail',
  button_hide_thumbnails: 'itago ang mga thumbnail',
  button_previous_thumbnail: 'dati',
  button_next_thumbnail: 'susunod',
  thumbnail_alt_text: 'thumbnail na larawan para sa {{ name }}',
  label_selected_thumbnail: '~ pinili ~',
  button_select_thumbnail: 'piliin ang thumbnail na ito',
  info_no_thumbnails_found: '(walang nakitang thumbnail)',
  button_show_metadata: 'ipakita ang metadata',
  button_hide_metadata: 'itago ang metadata',
  error_field_required: '{{ field }} ay kinakailangan',
  error_field_invalid: '{{ field }} ay hindi wasto',
  error_field_regex: '{{ field }} ay hindi wasto',
  error_field_min: '{{ field }} ay masyadong maikli',
  error_field_max: '{{ field }} ay masyadong mahaba',
  error_field_min_value: '{{ field }} ay masyadong maliit',
  error_field_max_value: '{{ field }} ay masyadong malaki',
  error_field_email: '{{ field }} ay hindi wastong email address',
  error_field_cannotDeleteSelf: 'Hindi mo matatanggal ang iyong sarili',
  error_field_alreadyExists: 'Umiiral na ang {{ thing }} may {{ field.toLowerCase() }}',
  error_field_readOnly: '{{ field }} ay read-only',
  error_field_accountNotFound: 'Hindi nahanap ang account o mali ang password',
  error_field_alreadyRegistered: 'Mayroon nang account na may ganitong {{ field.toLowerCase() }}',
  error_field_registrationNotAllowed: 'Hindi pinagana ng operator ng site ang paggawa ng account',
  error_field_url: '{{ field }} ay hindi wastong URL',
  error_field_host: '{{ field }} ay hindi wastong hostname',
  error_field_locale: '{{ field }} ay hindi wastong lokal',
  error_field_source: '{{ field }} ay hindi isang pinagmulang pangalan. Gumamit lamang ng mga titik, numero, at mga espesyal na character na ito: tuldok (.), gitling (-) at salungguhit (_)',
  error_field_notFound: 'Hindi mahanap ang {{ field }}',
  error_field_path: '{{ field }} ay hindi wastong landas',
  error_field_cannotMirrorToSame: 'Hindi maaaring magkapareho ang pinagmulan ng pagbabasa at pagsusulat',
  error_field_raw_hex: '{{ field }} ay hindi isang hexadecimal na numero (nangungunang 0x hindi pinapayagan)',
  error_field_hex: '{{ field }} ay hindi isang hexadecimal na numero',
  error_field_username: '{{ field }} ay hindi wastong username. Dapat magsimula sa isang titik at naglalaman lamang ng mga titik, numero, underscore (_), gitling (-) at tuldok (.)',
  locale_en: 'Ingles',
  locale_es: 'Espanyol',
  locale_it: 'Italyano',
  locale_fr: 'Pranses',
  locale_de: 'Aleman',
  locale_ar: 'Arabic',
  locale_bn: 'Bengali',
  locale_hi: 'Hindi',
  locale_id: 'Indonesian',
  locale_ja: 'Hapon',
  locale_ko: 'Koreano',
  locale_pl: 'Polish',
  locale_pt: 'Portuges',
  locale_ru: 'Ruso',
  locale_ur: 'Urdu',
  locale_sw: 'Swahili',
  locale_tl: 'Tagalog',
  locale_vi: 'Vietnamese',
  locale_zh: 'Intsik',
  label_date: '{{MMM}} {{d}} , {{YYYY}}',
  label_date_short: '{{M}} / {{d}} / {{YYYY}}',
  label_date_and_time: '{{MMM}} {{d}} , {{YYYY}} / {{h}} : {{m}} {{a}}',
  label_date_and_time_short: '{{M}} / {{d}} / {{YYYY}} {{h}} : {{m}} {{a}}',
  label_date_undefined: 'Hindi itinakda ang petsa/oras',
  label_date_day_half_am: 'AM',
  label_date_day_half_pm: 'PM',
  label_date_day_0: 'Linggo',
  label_date_day_1: 'Lunes',
  label_date_day_2: 'Martes',
  label_date_day_3: 'Miyerkules',
  label_date_day_4: 'Huwebes',
  label_date_day_5: 'Biyernes',
  label_date_day_6: 'Sabado',
  label_date_day_short_0: 'Araw',
  label_date_day_short_1: 'Mon',
  label_date_day_short_2: 'Tue',
  label_date_day_short_3: 'ikasal',
  label_date_day_short_4: 'Huwebes',
  label_date_day_short_5: 'Biyernes',
  label_date_day_short_6: 'Sab',
  label_date_month_0: 'Enero',
  label_date_month_1: 'Pebrero',
  label_date_month_2: 'Marso',
  label_date_month_3: 'Abril',
  label_date_month_4: 'May',
  label_date_month_5: 'Hunyo',
  label_date_month_6: 'Hulyo',
  label_date_month_7: 'Agosto',
  label_date_month_8: 'Setyembre',
  label_date_month_9: 'Oktubre',
  label_date_month_10: 'Nobyembre',
  label_date_month_11: 'Disyembre',
  label_date_month_short_0: 'Jan',
  label_date_month_short_1: 'Feb',
  label_date_month_short_2: 'Mar',
  label_date_month_short_3: 'Apr',
  label_date_month_short_4: 'May',
  label_date_month_short_5: 'Si Jun',
  label_date_month_short_6: 'Hul',
  label_date_month_short_7: 'Aug',
  label_date_month_short_8: 'Sep',
  label_date_month_short_9: 'Oct',
  label_date_month_short_10: 'Nob',
  label_date_month_short_11: 'Dec',
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
  label_duration_days: 'araw',
  label_duration_hours: 'oras',
  label_duration_minutes: 'minuto',
  label_duration_seconds: 'segundo',
  hint_readonly: '(Basahin lamang)',
  label_mediainfo_title: 'Pamagat',
  label_mediainfo_artist: 'Artista',
  label_mediainfo_album_artist: 'Artist ng Album',
  label_mediainfo_author: 'May-akda',
  label_mediainfo_composer: 'kompositor',
  label_mediainfo_year: 'taon',
  label_mediainfo_copyright: 'Copyright',
  label_mediainfo_album: 'Album',
  label_mediainfo_movie: 'Pelikula',
  label_mediainfo_description: 'Paglalarawan',
  label_mediainfo_comment: 'Magkomento',
  label_mediainfo_genre: 'Genre',
  label_mediainfo_location: 'Lokasyon',
  label_mediainfo_show: 'Ipakita',
  label_mediainfo_episode: 'Episode',
  label_mediainfo_episode_sort: 'Episode (uri)',
  label_mediainfo_season: 'Season',
  label_mediainfo_lyrics: 'Lyrics',
  label_mediainfo_tags: 'Mga tag',
  label_mediainfo_duration: 'Tagal',
  label_mediainfo_width: 'Lapad',
  label_mediainfo_height: 'taas',
  label_mediainfo_size: 'Sukat',
  label_mediainfo_videoTracks: 'Mga Video Track',
  label_mediainfo_audioTracks: 'Mga Audio Track',
  label_mediainfo_format: 'Format',
  label_mediainfo_contentType: 'Uri ng Nilalaman',
  label_mediainfo_bitRate: 'Bit Rate',
  label_mediainfo_frameRate: 'Frame rate',
  label_mediainfo_dateEncoded: 'Petsa na Na-encode',
  button_admin: 'Configuration ng Site',
  admin_title_site_administration: '{{ title }} Pangangasiwa',
  admin_title_manage_configuration: 'System Configuration',
  admin_title_source_administration: 'Pangangasiwa ng Pinagmulan',
  admin_title_user_administration: 'Pangangasiwa ng Gumagamit',
  admin_title_migrate_data: 'Ilipat ang Data',
  admin_title_transform_queue: 'Media Transform Queue',
  admin_title_site_administration_publicConfig: 'Pampublikong Configuration',
  admin_title_site_administration_privateConfig: 'Pribadong Configuration',
  admin_button_save_config: 'I-save',
  admin_info_config_updated: 'Matagumpay na na-update ang configuration ng system',
  admin_label_publicConfig_title: 'Pamagat ng Site',
  admin_label_publicConfig_siteUrl: 'URL ng Site',
  admin_label_publicConfig_public: 'Pampubliko?',
  admin_label_publicConfig_allowRegistration: 'Payagan ang Pagpaparehistro?',
  admin_label_publicConfig_limitRegistration: 'Limitahan ang Pagpaparehistro',
  admin_label_publicConfig_inviteFriendsEnabled: 'Ipakita ang &#39;Imbitahan ang Mga Kaibigan&#39; sa mga naka-log in na user?',
  admin_label_publicConfig_locales: 'Mga lokal',
  admin_label_publicConfig_defaultLocale: 'Default na Lokal',
  admin_label_publicConfig_emailEnabled: 'Naka-enable ang Email?',
  admin_label_publicConfig_timeout: 'Mga timeout',
  admin_label_publicConfig_timeout_verify: 'Timeout ng Token sa Pag-verify ng Account',
  admin_label_publicConfig_timeout_resetPassword: 'I-reset ang Timeout ng Token ng Password',
  admin_label_privateConfig_admin: 'Mga Setting ng Administrator',
  admin_label_privateConfig_admin_user: 'Admin User',
  admin_label_privateConfig_admin_user_email: 'Email',
  admin_label_privateConfig_admin_user_username: 'Username',
  admin_label_privateConfig_admin_user_password: 'Password',
  admin_label_privateConfig_admin_user_firstName: 'Pangalan',
  admin_label_privateConfig_admin_user_lastName: 'Huling pangalan',
  admin_label_privateConfig_admin_user_locale: 'Lokal',
  admin_label_privateConfig_admin_overwrite: 'I-overwrite?',
  admin_label_privateConfig_email: 'Mga Setting ng SMTP',
  admin_label_privateConfig_email_host: 'Host',
  admin_label_privateConfig_email_port: 'Port',
  admin_label_privateConfig_email_user: 'Username',
  admin_label_privateConfig_email_password: 'Password',
  admin_label_privateConfig_email_secure: 'Secure?',
  admin_label_privateConfig_email_fromEmail: 'Email address ng system',
  admin_label_privateConfig_redis: 'Mga Setting ng Redis',
  admin_label_privateConfig_redis_host: 'Host',
  admin_label_privateConfig_redis_port: 'Port',
  admin_label_privateConfig_redis_flushAtStartup: 'Flush sa startup?',
  admin_label_privateConfig_redis_listingCacheExpiration: 'Pag-expire ng cache ng listahan',
  admin_label_privateConfig_redis_manifestCacheExpiration: 'Manifest cache expiration',
  admin_label_privateConfig_media: 'Suporta sa Media',
  admin_label_privateConfig_media_video: 'Video',
  admin_label_privateConfig_media_video_allowedCommands: 'Mga pinahihintulutang utos',
  admin_label_privateConfig_encryption: 'Mga Setting ng Pag-encrypt',
  admin_label_privateConfig_encryption_key: 'Encryption Key',
  admin_label_privateConfig_encryption_iv: 'Initialization Vector (IV)',
  admin_label_privateConfig_encryption_algo: 'Algorithm',
  admin_label_privateConfig_encryption_bcryptRounds: 'Bcrypt rounds',
  admin_label_privateConfig_session: 'Mga Setting ng Session',
  admin_label_privateConfig_session_expiration: 'Timeout ng session',
  admin_label_privateConfig_autoscan: 'Mga Setting ng Autoscan',
  admin_label_privateConfig_autoscan_enabled: 'Paganahin ang autoscan',
  admin_label_privateConfig_autoscan_interval: 'Regular na agwat ng pag-scan',
  admin_label_privateConfig_autoscan_initialDelay: 'Pagkaantala ng pag-scan sa pagsisimula',
  admin_label_privateConfig_autoscan_showTransformOutput: 'Mag-log transform output?',
  admin_label_privateConfig_autoscan_cleanupTemporaryAssets: 'Linisin ang mga pansamantalang file?',
  admin_label_privateConfig_autoscan_deleteIncompleteUploads: 'Linisin ang mga hindi kumpletong pag-upload?',
  admin_label_privateConfig_autoscan_concurrency: 'Concurrency',
  admin_label_total_user_count: '{{ totalUserCount }} kabuuang mga gumagamit',
  admin_button_delete_user: 'Tanggalin ang User',
  admin_label_confirm_user_delete: 'Mangyaring kumpirmahin ang pagtanggal ng gumagamit: {{ email }}',
  label_configCategory: 'Kategorya ng configuration',
  admin_button_add_source: 'Magdagdag ng Pinagmulan',
  admin_title_add_source: 'Magdagdag ng Pinagmulan',
  admin_button_delete_source: 'Tanggalin ang Pinagmulan',
  admin_button_scan_source: 'Scan',
  admin_info_scan_scanning: 'Ini-scan...',
  admin_info_scan_successful: 'Matagumpay na nagsimula ang pag-scan',
  admin_info_scan_error: 'Nagkaroon ng error habang nag-scan',
  admin_label_confirm_source_delete: 'Mangyaring kumpirmahin ang pagtanggal ng pinagmulan: {{ source }}',
  admin_info_source_added: 'Ang bagong source na &#39; {{ source }} &#39; ay matagumpay na naidagdag',
  admin_info_source_add_error: 'Nagkaroon ng error sa pagdaragdag ng source &#39; {{ source }} &#39;',
  admin_label_source_name: 'Pangalan ng Pinagmulan',
  admin_label_self_source: '{{ title }} imbakan',
  admin_label_source_type: 'Uri ng Pinagmulan',
  admin_label_source_readOnly: 'Basahin lamang?',
  admin_label_source_cacheSize: 'Laki ng cache ng listahan (zero upang hindi paganahin)',
  admin_label_source_encryption_enable: 'Paganahin ang pag-encrypt',
  admin_label_source_encryption_key: 'Encryption key',
  admin_label_source_encryption_iv: 'Initialization vector (IV)',
  admin_label_source_encryption_algo: 'Algorithm',
  label_sourceType_local: 'Lokal na filesystem',
  label_sourceType_local_field_key: 'Direktoryo ng pag-mount',
  label_sourceType_local_field_mode: 'Mode ng paglikha ng file/direktoryo',
  label_sourceType_s3: 'Amazon S3',
  label_sourceType_s3_field_key: 'AWS Access Key',
  label_sourceType_s3_field_secret: 'AWS Secret Key',
  label_sourceType_s3_field_bucket: 'S3 Balde',
  label_sourceType_s3_field_region: 'Rehiyon ng AWS',
  label_sourceType_s3_field_prefix: 'Bucket Prefix',
  label_sourceType_s3_field_delimiter: 'Delimiter',
  label_sourceType_b2: 'Backblaze B2',
  label_sourceType_b2_field_key: 'Key ID',
  label_sourceType_b2_field_secret: 'Susi ng Application',
  label_sourceType_b2_field_bucket: 'B2 Bucket ID (hindi pangalan)',
  label_sourceType_b2_field_partSize: 'Laki ng bahagi',
  label_sourceType_b2_field_prefix: 'Bucket Prefix',
  label_sourceType_b2_field_delimiter: 'Delimiter',
  admin_label_firstEvent: 'unang kaganapan',
  admin_label_lastEvent: 'huling kaganapan',
  admin_label_eventTime: 'oras',
  admin_label_eventName: 'kaganapan',
  admin_label_eventDescription: 'paglalarawan',
  admin_label_xformQueueEmpty: 'Walang aktibong trabaho',
  admin_label_migration_noSources: 'Walang tinukoy na mga mapagkukunan',
  admin_label_migration_results: 'Mga resulta ng paglilipat:',
  admin_label_migration_readSource: 'Pinagmulan kung saan magmi-migrate ng data',
  admin_label_migration_readPath: 'Basahin mula sa landas (blangko para sa filesystem root)',
  admin_label_readSource: 'Basahin ang pinagmulan',
  admin_label_readPath: 'Basahin ang landas',
  admin_label_migration_writeSource: 'Pinagmulan kung saan isusulat ang data',
  admin_label_migration_writePath: 'Sumulat sa landas (blangko para sa filesystem root)',
  admin_label_writeSource: 'Sumulat ng pinagmulan',
  admin_label_writePath: 'Sumulat ng landas',
  admin_button_migrate_data: 'Ilipat ang Data',
  admin_info_migration_success: 'Matagumpay na nailipat ang data',
  admin_info_migration_error: 'Nagkaroon ng error habang naglilipat ng data',
  http_invalid_request_method: 'Ang paraan ng paghiling ng HTTP {{ method }} ay hindi sinusuportahan ng endpoint na ito',
  locale_ha: 'Hausa',
  locale_mr: 'Marathi',
  locale_tr: 'Turkish',
  info_search_searching: '...',
  search_stop_words: 'a,tungkol,sa itaas,pagkatapos,muli,laban,sa,lahat,am,an,at,anuman,ay hindi,sa,sa,sa,dahil,dati,nasa ibaba,sa pagitan,kapwa,ngunit, ni, hindi, hindi, hindi, hindi, hindi, nagawa, hindi, ginagawa, hindi, pababa, sa panahon, bawat, ilang, para, mula sa, higit pa, nagkaroon, hindi pa, mayroon, wala, wala, wala, siya, siya, siya, narito, narito, sa kanya, sa sarili niya, sa kanyang sarili, sa kanya, paano, paano, ako, ako, ako, ako, ako, kung, sa, sa, ay, hindi, ito, ito, mismo, tayo, ako, higit pa, karamihan, hindi dapat, ang sarili ko, hindi, ni, hindi, ng, off, on, once, only, or, other, should, our, our ourselves, out, over, own, same, hindi, she\'d, she \'ay, siya, dapat, hindi, kaya, ang ilan, ganyan, kaysa, iyon, iyon, ang, kanila, sa kanila, sa kanila, sa kanilang sarili, pagkatapos, doon, mayroon, ito, sila, sila, sila, ,sila, mayroon, ito, mga, sa, sa, sa, sa ilalim, hanggang, pataas, uct, utc, napaka, ay, hindi, kami, kami, kami, kami, kami ,namin, naging, hindi, ano, ano, kailan, kailan, saan, nasaan, alin, habang, sino, sino, sino, bakit, bakit, kasama, hindi, gagawin, hindi, ikaw ,ikaw,ikaw,ikaw ay,ikaw na,iyo,iyo,iyong sarili,iyong sarili',
  label_header_comments: 'Mga komento',
  label_header_no_comments: 'May sasabihin ka ba?',
  label_comment: 'Magdagdag ng komento!',
  label_comment_modified: 'na-edit',
  label_updating_comment: 'ina-update...',
  label_removing_comment: 'inaalis...',
  button_add_comment: 'magdagdag ng komento',
  button_update_comment: 'update ng komento',
  admin_title_index_administration: 'Pamahalaan ang mga Index',
  admin_button_reindex_source: 'Muling i-index',
  admin_info_reindex_indexing: 'Ini-index...',
  admin_info_reindex_error: 'May naganap na error sa panahon ng muling pag-index: {{ e }}',
  admin_info_reindex_successful: 'Ang muling pag-index ay matagumpay na nagsimula',
  admin_info_reindex_info_error: 'Nagkaroon ng error sa pagbabasa ng katayuan ng muling pag-index: {{ e }}',
  admin_label_reindex_path: 'Pinagmulan at landas',
  admin_label_reindex_time: 'Oras',
  admin_label_reindex_status: 'Katayuan',
  admin_label_reindex_noResults: 'Walang nakitang mga resulta ng muling pag-index',
  footer_credit: '<a style="text-decoration: none;" href="https://github.com/cobbzilla/yuebing">Pinapatakbo ng 🥮 Yuebing</a>',
  info_search_indexes_building: 'Ang parehong paghahanap na ito ay maaaring magbalik ng higit pang mga resulta sa hinaharap. Ang ilang mga index ng paghahanap ay muling itinatayo: {{ indexes }}',
  info_search_no_results_unverified: 'Upang makita ang mga resulta ng paghahanap, paki-verify ang iyong account gamit ang link na ipinadala sa {{ email }}',
  label_metadata: 'metadata ng file',
  label_mediainfo: 'file ng mediainfo',
  label_add_tag: 'Magdagdag ng tag',
  label_adding_tag: 'nagdadagdag ng tag...',
  label_removing_tag: 'inaalis ang tag...',
  label_scan_ignoreErrors: 'Huwag pansinin ang mga nakaraang error',
  label_scan_overwrite: 'Patungan ang umiiral na mga file',
  label_scan_reprocess: 'Iproseso muli',
  label_scan_reprocess_profiles: 'Iproseso muli ang mga profile na ito',
  label_path: 'Daan',
  label_select_all: 'Piliin lahat',
  locale_text_list_separator: ',',
  admin_title_source_browser: 'Mag-browse ng Mga Pinagmulan',
  admin_title_reindex_status: 'Katayuan ng Pag-index',
  admin_button_browse_source: 'Mag-browse',
  admin_label_scan_config: 'I-configure ang Scan: {{ source }}',
  admin_label_scan_olderThan: 'Huwag pansinin ang media na naproseso pagkatapos ng isang partikular na petsa at oras',
  admin_button_delete_path: 'Tanggalin',
  admin_button_rebuildSearchIndex: 'Muling Buuin ang Index ng Paghahanap',
  admin_button_rebuildSearchIndex_warning: 'Ito ay muling bubuo ng mga index ng paghahanap sa lahat ng pinagmumulan at maaaring tumagal ng napakatagal',
  admin_info_path_delete: 'Tinatanggal ang landas...',
  label_editor: 'Editor?',
  label_noCache: 'i-reset ang cache?',
  label_previous_page: 'nakaraang pahina ng mga resulta',
  label_next_page: 'susunod na pahina ng mga resulta',
  label_results_info: 'nagpapakita ng mga resulta {{ start }} hanggang {{ end }} ng {{ total }} kabuuan',
  label_playback_quality: 'Kalidad ng pag-playback',
  label_playback_quality_auto: 'awtomatiko',
  admin_label_privateConfig_redis_buildSearchIndexAtStartup: 'Bumuo ng mga index ng paghahanap sa pagsisimula',
  locale_af: 'Afrikaans',
  locale_sq: 'Albaniano',
  locale_am: 'Amharic',
  locale_hy: 'Armenian',
  locale_az: 'Azerbaijani',
  locale_eu: 'Basque',
  locale_be: 'Belarusian',
  locale_bs: 'Bosnian',
  locale_bg: 'Bulgarian',
  locale_ca: 'Catalan',
  locale_ceb: 'Cebuano',
  locale_co: 'Corsican',
  locale_hr: 'Croatian',
  locale_cs: 'Czech',
  locale_da: 'Danish',
  locale_nl: 'Dutch',
  locale_eo: 'Esperanto',
  locale_et: 'Estonian',
  locale_fi: 'Finnish',
  locale_fy: 'Frisian',
  locale_gl: 'Galician',
  locale_ka: 'Georgian',
  locale_el: 'Griyego',
  locale_gu: 'Gujarati',
  locale_ht: 'Haitian Creole',
  locale_haw: 'Hawaiian',
  locale_he: 'Hebrew',
  locale_hmn: 'Hmong',
  locale_hu: 'Hungarian',
  locale_is: 'Icelandic',
  locale_ig: 'Igbo',
  locale_ga: 'Irish',
  locale_jv: 'Javanese',
  locale_kn: 'Kannada',
  locale_kk: 'Kazakh',
  locale_km: 'Khmer',
  locale_rw: 'Kinyarwanda',
  locale_ku: 'Kurdish',
  locale_ky: 'Kyrgyz',
  locale_lo: 'Lao',
  locale_la: 'Latin',
  locale_lv: 'Latvian',
  locale_lt: 'Lithuanian',
  locale_lb: 'Luxembourgish',
  locale_mk: 'Macedonian',
  locale_mg: 'Malagasy',
  locale_ms: 'Malay',
  locale_ml: 'Malayalam',
  locale_mt: 'Maltese',
  locale_mi: 'Maori',
  locale_mn: 'Mongolian',
  locale_my: 'Myanmar (Burmese)',
  locale_ne: 'Nepali',
  locale_no: 'Norwegian',
  locale_ny: 'Nyanja (Chichewa)',
  locale_or: 'Odia (Oriya)',
  locale_ps: 'Pashto',
  locale_fa: 'Persian',
  locale_pa: 'Punjabi',
  locale_ro: 'Romanian',
  locale_sm: 'Samoan',
  locale_gd: 'Scots Gaelic',
  locale_sr: 'Serbian',
  locale_st: 'Sesotho',
  locale_sn: 'Shona',
  locale_sd: 'Sindhi',
  locale_si: 'Sinhala (Sinhalese)',
  locale_sk: 'Slovak',
  locale_sl: 'Slovenian',
  locale_so: 'Somali',
  locale_su: 'Sundanese',
  locale_sv: 'Swedish',
  locale_tg: 'Tajik',
  locale_ta: 'Tamil',
  locale_tt: 'Tatar',
  locale_te: 'Telugu',
  locale_th: 'Thai',
  locale_tk: 'Turkmen',
  locale_uk: 'Ukrainian',
  locale_ug: 'Uyghur',
  locale_uz: 'Uzbek',
  locale_cy: 'Welsh',
  locale_xh: 'Xhosa',
  locale_yi: 'Yiddish',
  locale_yo: 'Yoruba',
  locale_zu: 'Zulu',
  label_mediainfo_audioLanguage: 'Wika (Audio)',
  label_mediainfo_videoLanguage: 'Wika (Video)',
  label_mediainfo_textTrackLanguages: 'Mga Wika (Mga Subtitle)',
  label_mediainfo_videoTrackCount: 'Mga Video Track',
  label_mediainfo_audioTrackCount: 'Mga Audio Track',
  label_mediainfo_textTrackCount: 'Mga Text Track'
}
