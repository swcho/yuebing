export default {
  id: 'hi',
  emoji: '🇮🇳',
  anonymous_user_name: 'रहस्यमयी',
  welcome_public: '{{ title }} में आपका स्वागत है!',
  welcome_user: '{{ title }} में आपका स्वागत है, {{user.firstName || user.email.includes("@") ? user.email.substring(0, user.email.indexOf("@")) : user.email}}!',
  title_login: 'साइन इन करें',
  title_register: 'साइन अप करें',
  title_verifying: 'खाता सत्यापित किया जा रहा है...',
  title_requestPasswordReset: 'पासवर्ड रीसेट',
  title_resetPassword: 'नया पासवर्ड सेट करें',
  title_verifying_ended: 'सत्यापन समाप्त',
  title_profile: 'खाता संबंधी जानकारी',
  button_profile: 'मेरा खाता',
  button_update: 'सहेजें',
  info_profile_update: 'आपकी खाता जानकारी सफलतापूर्वक अपडेट कर दी गई थी',
  button_reset_password: 'पासवर्ड रीसेट',
  button_delete_my_account: 'मेरा खाता हटाएं (पूर्ववत नहीं किया जा सकता)',
  label_confirm_user_delete: 'अपने खाते को हटाने की पुष्टि करें। यह क्रिया अपरिवर्तनीय है!',
  label_email: 'ईमेल',
  label_username: 'उपयोगकर्ता नाम',
  label_usernameOrEmail: 'उपयोगकर्ता का नाम या ईमेल',
  label_firstName: 'पहला नाम',
  label_lastName: 'उपनाम',
  label_name: 'नाम',
  label_password: 'पासवर्ड',
  label_newPassword: 'नया पासवर्ड',
  label_locale: 'भाषा',
  label_token: 'सत्यापन टोकन',
  label_ctime: 'बनाया था',
  label_mtime: 'संशोधित',
  button_login: 'साइन इन करें',
  button_logout: 'साइन आउट',
  button_register: 'साइन अप करें',
  button_forgot_password: 'पासवर्ड भूल गए हैं?',
  button_send_password_reset_email: 'भेजना',
  button_set_new_password: 'सांकेतिक शब्द लगना',
  info_password_reset_email_sent: '{{ email }} पर एक ईमेल संदेश भेजा गया था, अपना पासवर्ड रीसेट करने के लिए लिंक के लिए अपना इनबॉक्स देखें',
  info_password_reset_email_error: 'एक त्रुटि हुई और हो सकता है कि आपका संदेश नहीं भेजा गया हो। बाद में पुन: प्रयास करें',
  info_password_reset_try_again: 'पुनः प्रयास करें',
  info_verify_token_error: 'सत्यापन टोकन समाप्त हो गया है या अन्यथा अमान्य है',
  info_registration_not_allowed: '{{ title }} के संचालक ने खाता निर्माण अक्षम कर दिया है',
  button_invite_friends: 'अपने मित्रों को {{ title }} में आमंत्रित करें!',
  label_friend_emails: 'अल्पविराम या रिक्त स्थान से अलग किए गए ईमेल की सूची',
  button_send_invitations: 'निमंत्रण भेजें',
  info_invite_friends_header: 'अपने मित्रों को {{ title }} में आमंत्रित करें!',
  info_invite_friends_subheader: 'यहां कुछ ईमेल पते दर्ज करें और हम उन्हें एक आमंत्रण भेजेंगे',
  info_invite_friends_limited_registration: '{{ title }} के संचालक के पास विशिष्ट लोगों के लिए पंजीकरण सीमित है। आमंत्रण भेजने के लिए आपका स्वागत है, लेकिन इन उपयोगकर्ताओं को सफलतापूर्वक एक खाता बनाने में सक्षम होने से पहले साइट व्यवस्थापक द्वारा उपयोगकर्ताओं की अनुमोदित सूची भी जोड़नी होगी',
  info_invite_friends_disabled_no_email: '"मित्रों को आमंत्रित करें" सुविधा अक्षम है क्योंकि ईमेल को {{title }} पर कॉन्फ़िगर नहीं किया गया है',
  info_invite_friends_enabled_no_email: '"मित्रों को आमंत्रित करें" सुविधा सक्षम है लेकिन ईमेल को {{ title }} पर कॉन्फ़िगर नहीं किया गया है, इसलिए इसका उपयोग नहीं किया जा सकता है',
  info_invitation_success_results: '{{ successCount }} मित्रों को आपका आमंत्रण सफलतापूर्वक भेज दिया गया है',
  info_invitation_error_results: '{{ errorCount }} मित्रों को आपका आमंत्रण डिलीवर नहीं किया जा सका',
  label_search: 'खोज',
  button_search: 'खोज',
  label_sort: 'इसके अनुसार क्रमबद्ध करें',
  label_sort_order: 'आदेश',
  label_sort_ascending: 'आरोही',
  label_sort_descending: 'उतरते',
  title_browsing_folder: 'फ़ोल्डर: {{folder}}',
  button_back_to: '{{prefix}} पर वापस जाएं',
  button_back_to_root_folder: 'शीर्ष-स्तर पर वापस जाएं',
  info_search_no_results: 'चार सौ चार कारण हैं कि यहां कुछ होना चाहिए, लेकिन यहां कुछ भी नहीं है',
  label_media_unprocessed: '(असंसाधित)',
  button_show_media_info: 'मीडिया जानकारी दिखाएं',
  button_hide_media_info: 'मीडिया की जानकारी छुपाएं',
  button_show_thumbnails: 'थंबनेल दिखाओ',
  button_hide_thumbnails: 'थंबनेल छुपाएं',
  button_previous_thumbnail: 'पिछला',
  button_next_thumbnail: 'अगला',
  thumbnail_alt_text: '{{ name }} के लिए थंबनेल इमेज',
  label_selected_thumbnail: '~ चयनित ~',
  button_select_thumbnail: 'इस थंबनेल का चयन करें',
  info_no_thumbnails_found: '(कोई थंबनेल नहीं मिला)',
  button_show_metadata: 'मेटाडेटा दिखाएं',
  button_hide_metadata: 'मेटाडेटा छुपाएं',
  error_field_required: '{{ field }} आवश्यक है',
  error_field_invalid: '{{ field }} मान्य नहीं है',
  error_field_regex: '{{ field }} मान्य नहीं है',
  error_field_min: '{{ field }} बहुत छोटा है',
  error_field_max: '{{ field }} बहुत लंबा है',
  error_field_min_value: '{{ field }} बहुत छोटा है',
  error_field_max_value: '{{ field }} बहुत बड़ा है',
  error_field_email: '{{ field }} मान्य ईमेल पता नहीं है',
  error_field_cannotDeleteSelf: 'आप अपने आप को मिटा नहीं सकते',
  error_field_alreadyExists: '{{ चीज़}} {{field.toLowerCase ()}} के साथ पहले से मौजूद है',
  error_field_readOnly: '{{ field }} केवल पढ़ने के लिए है',
  error_field_accountNotFound: 'खाता नहीं मिला या पासवर्ड गलत है',
  error_field_alreadyRegistered: 'इसके साथ एक खाता {{field.toLowerCase ()}} पहले से मौजूद है',
  error_field_registrationNotAllowed: 'साइट ऑपरेटर ने खाता निर्माण अक्षम कर दिया है',
  error_field_url: '{{ field }} मान्य URL नहीं है',
  error_field_host: '{{ field }} मान्य होस्टनाम नहीं है',
  error_field_locale: '{{ field }} मान्य स्थान नहीं है',
  error_field_source: '{{ field }} स्रोत नाम नहीं है। केवल अक्षरों, संख्याओं और इन विशेष वर्णों का उपयोग करें: अवधि (.), हाइफ़न (-) और अंडरस्कोर (_)',
  error_field_notFound: '{{ field }} का पता नहीं चल सका',
  error_field_path: '{{ field }} मान्य पथ नहीं है',
  error_field_cannotMirrorToSame: 'स्रोत पढ़ें और स्रोत लिखें एक ही स्रोत नहीं हो सकते हैं',
  error_field_raw_hex: '{{ field }} एक हेक्साडेसिमल संख्या नहीं है (अग्रणी 0x की अनुमति नहीं है)',
  error_field_hex: '{{ field }} एक हेक्साडेसिमल संख्या नहीं है',
  error_field_username: '{{ field }} मान्य उपयोगकर्ता नाम नहीं है। एक अक्षर से शुरू होना चाहिए और इसमें केवल अक्षर, संख्याएं, अंडरस्कोर (_), हाइफ़न (-) और डॉट्स (।) होना चाहिए।',
  locale_en: 'अंग्रेज़ी',
  locale_es: 'स्पैनिश',
  locale_it: 'इतालवी',
  locale_fr: 'फ्रेंच',
  locale_de: 'जर्मन',
  locale_ar: 'अरबी',
  locale_bn: 'बंगाली',
  locale_hi: 'हिन्दी',
  locale_ja: 'जापानी',
  locale_ko: 'कोरियाई',
  locale_pt: 'पुर्तगाली',
  locale_ru: 'रूसी',
  locale_sw: 'स्‍वाहि‍ली',
  locale_zh: 'चीनी',
  label_date: '{{MMM}} {{d}}, {{YYYY}}',
  label_date_short: '{{M}}/{{d}}/{{YYYY}}',
  label_date_and_time: '{{MMM}} {{d}}, {{YYYY}} / {{h}}:{{m}}{{a}}',
  label_date_and_time_short: '{{M}}/{{d}}/{{YYYY}} {{h}}:{{m}}{{a}}',
  label_date_undefined: 'दिनांक/समय निर्धारित नहीं है',
  label_date_day_half_am: 'पूर्वाह्न',
  label_date_day_half_pm: 'बजे',
  label_date_day_0: 'रविवार',
  label_date_day_1: 'सोमवार',
  label_date_day_2: 'मंगलवार',
  label_date_day_3: 'बुधवार',
  label_date_day_4: 'गुरुवार',
  label_date_day_5: 'शुक्रवार',
  label_date_day_6: 'शनिवार',
  label_date_day_short_0: 'रवि',
  label_date_day_short_1: 'मेरे',
  label_date_day_short_2: 'मंगल',
  label_date_day_short_3: 'बुध',
  label_date_day_short_4: 'इकट्ठा करना',
  label_date_day_short_5: 'शुक्र',
  label_date_day_short_6: 'बैठा',
  label_date_month_0: 'जनवरी',
  label_date_month_1: 'फ़रवरी',
  label_date_month_2: 'मार्च',
  label_date_month_3: 'अप्रैल',
  label_date_month_4: 'मई',
  label_date_month_5: 'जून',
  label_date_month_6: 'जुलाई',
  label_date_month_7: 'अगस्त',
  label_date_month_8: 'सितंबर',
  label_date_month_9: 'अक्टूबर',
  label_date_month_10: 'नवंबर',
  label_date_month_11: 'दिसंबर',
  label_date_month_short_0: 'जनवरी',
  label_date_month_short_1: 'फ़रवरी',
  label_date_month_short_2: 'मार्च',
  label_date_month_short_3: 'अप्रैल',
  label_date_month_short_4: 'मई',
  label_date_month_short_5: 'जून',
  label_date_month_short_6: 'जुलाई',
  label_date_month_short_7: 'अगस्त',
  label_date_month_short_8: 'सितम्बर',
  label_date_month_short_9: 'अक्टूबर',
  label_date_month_short_10: 'नवम्बर',
  label_date_month_short_11: 'दिसम्बर',
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
  label_date_month_number_10: '1 1',
  label_date_month_number_11: '12',
  label_duration_days: 'दिन',
  label_duration_hours: 'घंटे',
  label_duration_minutes: 'मिनट',
  label_duration_seconds: 'सेकंड',
  hint_readonly: '(केवल पढ़ने के लिए)',
  label_mediainfo_title: 'शीर्षक',
  label_mediainfo_artist: 'कलाकार',
  label_mediainfo_album_artist: 'चित्राधार कलाकार',
  label_mediainfo_author: 'लेखक',
  label_mediainfo_composer: 'संगीतकार',
  label_mediainfo_year: 'साल',
  label_mediainfo_copyright: 'कॉपीराइट',
  label_mediainfo_album: 'एल्बम',
  label_mediainfo_movie: 'चलचित्र',
  label_mediainfo_description: 'विवरण',
  label_mediainfo_comment: 'टिप्पणी',
  label_mediainfo_genre: 'शैली',
  label_mediainfo_location: 'स्थान',
  label_mediainfo_show: 'प्रदर्शन',
  label_mediainfo_episode: 'प्रकरण',
  label_mediainfo_episode_sort: 'एपिसोड (क्रमबद्ध)',
  label_mediainfo_season: 'मौसम',
  label_mediainfo_lyrics: 'बोल',
  label_mediainfo_tags: 'टैग',
  label_mediainfo_duration: 'अवधि',
  label_mediainfo_width: 'चौड़ाई',
  label_mediainfo_height: 'कद',
  label_mediainfo_size: 'आकार',
  label_mediainfo_videoTracks: 'वीडियो ट्रैक',
  label_mediainfo_audioTracks: 'ऑडियो ट्रैक',
  label_mediainfo_format: 'प्रारूप',
  label_mediainfo_contentType: 'सामग्री प्रकार',
  label_mediainfo_bitRate: 'बिट दर',
  label_mediainfo_frameRate: 'फ्रेम रेट',
  label_mediainfo_dateEncoded: 'तिथि एन्कोडेड',
  button_admin: 'साइट विन्यास',
  admin_title_site_administration: '{{ title }} प्रशासन',
  admin_title_manage_configuration: 'प्रणाली विन्यास',
  admin_title_source_administration: 'स्रोत प्रशासन',
  admin_title_user_administration: 'यूजर एडमिनिस्ट्रेशन',
  admin_title_migrate_data: 'डेटा माइग्रेट करें',
  admin_title_transform_queue: 'मीडिया रूपांतरण कतार',
  admin_title_site_administration_publicConfig: 'सार्वजनिक विन्यास',
  admin_title_site_administration_privateConfig: 'निजी विन्यास',
  admin_button_save_config: 'बचाना',
  admin_info_config_updated: 'सिस्टम कॉन्फ़िगरेशन सफलतापूर्वक अपडेट किया गया',
  admin_label_publicConfig_title: 'क्षेत्र शीर्षक',
  admin_label_publicConfig_siteUrl: 'साइट URL',
  admin_label_publicConfig_public: 'जनता?',
  admin_label_publicConfig_allowRegistration: 'पंजीकरण की अनुमति दें?',
  admin_label_publicConfig_limitRegistration: 'सीमा पंजीकरण',
  admin_label_publicConfig_inviteFriendsEnabled: 'लॉग-इन उपयोगकर्ताओं को \'मित्रों को आमंत्रित करें\' दिखाएँ?',
  admin_label_publicConfig_locales: 'स्थानीय',
  admin_label_publicConfig_defaultLocale: 'डिफ़ॉल्ट लोकेल',
  admin_label_publicConfig_emailEnabled: 'ईमेल सक्षम है?',
  admin_label_publicConfig_timeout: 'समय समाप्ति',
  admin_label_publicConfig_timeout_verify: 'खाता सत्यापन टोकन समयबाह्य',
  admin_label_publicConfig_timeout_resetPassword: 'पासवर्ड रीसेट करें टोकन टाइमआउट',
  admin_label_privateConfig_admin: 'व्यवस्थापक सेटिंग्स',
  admin_label_privateConfig_admin_user: 'व्यवस्थापक उपयोगकर्ता',
  admin_label_privateConfig_admin_user_email: 'ईमेल',
  admin_label_privateConfig_admin_user_password: 'पासवर्ड',
  admin_label_privateConfig_admin_user_firstName: 'पहला नाम',
  admin_label_privateConfig_admin_user_lastName: 'उपनाम',
  admin_label_privateConfig_admin_user_locale: 'स्थानीय',
  admin_label_privateConfig_admin_overwrite: 'अधिलेखित करें?',
  admin_label_privateConfig_email: 'एसएमटीपी सेटिंग्स',
  admin_label_privateConfig_email_host: 'मेज़बान',
  admin_label_privateConfig_email_port: 'पत्तन',
  admin_label_privateConfig_email_user: 'उपयोगकर्ता नाम',
  admin_label_privateConfig_email_password: 'पासवर्ड',
  admin_label_privateConfig_email_secure: 'सुरक्षित?',
  admin_label_privateConfig_email_fromEmail: 'सिस्टम ईमेल पता',
  admin_label_privateConfig_redis: 'रेडिस सेटिंग्स',
  admin_label_privateConfig_redis_host: 'मेज़बान',
  admin_label_privateConfig_redis_port: 'पत्तन',
  admin_label_privateConfig_redis_flushAtStartup: 'स्टार्टअप पर फ्लश?',
  admin_label_privateConfig_redis_listingCacheExpiration: 'लिस्टिंग कैश समाप्ति',
  admin_label_privateConfig_redis_manifestCacheExpiration: 'कैश समाप्ति प्रकट करें',
  admin_label_privateConfig_media: 'मीडिया समर्थन',
  admin_label_privateConfig_media_video: 'वीडियो',
  admin_label_privateConfig_media_video_allowedCommands: 'अनुमत आदेश',
  admin_label_privateConfig_encryption: 'एन्क्रिप्शन सेटिंग्स',
  admin_label_privateConfig_encryption_key: 'कूटलेखन कुंजी',
  admin_label_privateConfig_encryption_iv: 'आरंभीकरण वेक्टर (IV)',
  admin_label_privateConfig_encryption_algo: 'कलन विधि',
  admin_label_privateConfig_encryption_bcryptRounds: 'बीक्रिप्ट राउंड',
  admin_label_privateConfig_session: 'सत्र सेटिंग्स',
  admin_label_privateConfig_session_expiration: 'सेशन खत्म',
  admin_label_privateConfig_autoscan: 'ऑटोस्कैन सेटिंग्स',
  admin_label_privateConfig_autoscan_enabled: 'ऑटो स्कैन सक्षम करें',
  admin_label_privateConfig_autoscan_interval: 'नियमित स्कैन अंतराल',
  admin_label_privateConfig_autoscan_initialDelay: 'स्टार्टअप स्कैन में देरी',
  admin_label_privateConfig_autoscan_showTransformOutput: 'लॉग ट्रांसफॉर्म आउटपुट?',
  admin_label_privateConfig_autoscan_cleanupTemporaryAssets: 'अस्थायी फ़ाइलें साफ़ करें?',
  admin_label_privateConfig_autoscan_deleteIncompleteUploads: 'अधूरे अपलोड साफ़ करें?',
  admin_label_privateConfig_autoscan_concurrency: 'संगामिति',
  admin_label_total_user_count: '{{ totalUserCount }} कुल उपयोगकर्ता',
  admin_button_delete_user: 'उपभोक्ता मिटायें',
  admin_label_confirm_user_delete: 'कृपया उपयोगकर्ता को हटाने की पुष्टि करें: {{ email }}',
  label_configCategory: 'विन्यास श्रेणी',
  admin_button_add_source: 'स्रोत जोड़ें',
  admin_title_add_source: 'स्रोत जोड़ें',
  admin_button_delete_source: 'स्रोत हटाएं',
  admin_button_scan_source: 'स्कैन',
  admin_info_scan_scanning: 'स्कैन किया जा रहा है...',
  admin_info_scan_successful: 'स्कैन सफलतापूर्वक शुरू हो गया है',
  admin_info_scan_error: 'स्कैन के दौरान एक त्रुटि हुई',
  admin_label_confirm_source_delete: 'कृपया स्रोत को हटाने की पुष्टि करें: {{source}}',
  admin_info_source_added: 'नया स्रोत \'{{source }}\' सफलतापूर्वक जोड़ा गया',
  admin_info_source_add_error: 'स्रोत \'{{source }}\' जोड़ने में त्रुटि हुई',
  admin_label_source_name: 'स्रोत नाम',
  admin_label_self_source: '{{ title }} भंडारण',
  admin_label_source_type: 'स्रोत प्रकार',
  admin_label_source_readOnly: 'केवल पढ़ने के लिए?',
  admin_label_source_cacheSize: 'लिस्टिंग कैश आकार (अक्षम करने के लिए शून्य)',
  admin_label_source_encryption_enable: 'एन्क्रिप्शन सक्षम करें',
  admin_label_source_encryption_key: 'कूटलेखन कुंजी',
  admin_label_source_encryption_iv: 'आरंभीकरण वेक्टर (IV)',
  admin_label_source_encryption_algo: 'कलन विधि',
  label_sourceType_local: 'स्थानीय फाइल सिस्टम',
  label_sourceType_local_field_baseDir: 'माउंट निर्देशिका',
  label_sourceType_local_field_mode: 'फ़ाइल/निर्देशिका निर्माण मोड',
  label_sourceType_s3: 'अमेज़न S3',
  label_sourceType_s3_field_key: 'एडब्ल्यूएस एक्सेस कुंजी',
  label_sourceType_s3_field_secret: 'एडब्ल्यूएस गुप्त कुंजी',
  label_sourceType_s3_field_bucket: 'S3 बाल्टी',
  label_sourceType_s3_field_region: 'एडब्ल्यूएस क्षेत्र',
  label_sourceType_s3_field_prefix: 'बाल्टी उपसर्ग',
  label_sourceType_s3_field_delimiter: 'सीमान्तक',
  label_sourceType_b2: 'बैकब्लज़ बी2',
  label_sourceType_b2_field_key: 'कुंजी आईडी',
  label_sourceType_b2_field_secret: 'आवेदन कुंजी',
  label_sourceType_b2_field_bucket: 'B2 बकेट आईडी (नाम नहीं)',
  label_sourceType_b2_field_partSize: 'भाग का आकार',
  label_sourceType_b2_field_prefix: 'बाल्टी उपसर्ग',
  label_sourceType_b2_field_delimiter: 'सीमान्तक',
  admin_label_firstEvent: 'पहली घटना',
  admin_label_lastEvent: 'अंतिम कार्यक्रम',
  admin_label_eventTime: 'समय',
  admin_label_eventName: 'प्रतिस्पर्धा',
  admin_label_eventDescription: 'विवरण',
  admin_label_xformQueueEmpty: 'कोई सक्रिय नौकरी नहीं',
  admin_label_migration_noSources: 'कोई स्रोत परिभाषित नहीं',
  admin_label_migration_results: 'प्रवासन परिणाम:',
  admin_label_migration_readSource: 'से डेटा माइग्रेट करने का स्रोत',
  admin_label_migration_readPath: 'पथ से पढ़ें (फाइल सिस्टम रूट के लिए रिक्त)',
  admin_label_readSource: 'स्रोत पढ़ें',
  admin_label_readPath: 'पथ पढ़ें',
  admin_label_migration_writeSource: 'डेटा लिखने के लिए स्रोत',
  admin_label_migration_writePath: 'पथ पर लिखें (फाइल सिस्टम रूट के लिए रिक्त)',
  admin_label_writeSource: 'स्रोत लिखें',
  admin_label_writePath: 'पथ लिखें',
  admin_button_migrate_data: 'डेटा माइग्रेट करें',
  admin_info_migration_success: 'डेटा सफलतापूर्वक माइग्रेट किया गया',
  admin_info_migration_error: 'डेटा माइग्रेट करते समय एक त्रुटि हुई',
  http_invalid_request_method: 'HTTP अनुरोध विधि {{method}} इस समापन बिंदु द्वारा समर्थित नहीं है',
  admin_label_privateConfig_admin_user_username: 'उपयोगकर्ता नाम',
  locale_id: 'इन्डोनेशियाई',
  locale_ur: 'उर्दू',
  locale_tl: 'तागालोग',
  locale_pl: 'पोलिश',
  locale_vi: 'वियतनामी',
  locale_ha: 'होउसा',
  locale_mr: 'मरांथी',
  locale_tr: 'तुर्की',
  info_search_searching: '...',
  search_stop_words: 'ए, के बारे में, ऊपर, बाद में, फिर से, के खिलाफ, सभी, हूँ, एक, और, कोई भी, नहीं हैं, जैसे, पर, हो, क्योंकि, पहले, होने, नीचे, बीच, दोनों, लेकिन द्वारा, नहीं कर सकता, नहीं कर सकता था, नहीं कर सकता था, नहीं कर सकता था, नहीं करता था, नहीं करता था, नहीं करता था, नहीं करता था, के दौरान, प्रत्येक, कुछ, के लिए, से, आगे, था नहीं था, नहीं है, नहीं है, नहीं है, वह है, वह होगा, वह, वह, वह, यहाँ, यहाँ, उसका, खुद, उसे, खुद, उसका, कैसे, कैसे है, मैं, मैं, मैं करूँगा, मैं हूँ, मैंने, यदि, में, में, है, नहीं है, यह, यह, यह, इसका, स्वयं, चलो, मुझे, अधिक, सर्वाधिक, नहीं करना चाहिए, मेरा, स्वयं, नहीं, न, नहीं, का, बंद, पर, एक बार, केवल, या, अन्य, चाहिए, हमारा, हमारा स्वयं, बाहर, ऊपर, अपना, वही, नहीं, वह, वह, वह होगा, वह है, चाहिए, नहीं, तो, कुछ, ऐसे, से, वह, वह, वह, उनका, उनका, उन्हें, स्वयं, फिर, वहां, वहां, ये, वे, वे, वे करेंगे वे हैं, उन्होंने, यह, वे, के माध्यम से, से, भी, नीचे, जब तक, ऊपर, uct, utc, बहुत, नहीं थे, हम, हम, हम, हम करेंगे, हम हैं ,हम, थे, नहीं थे, क्या, क्या, कब, कब, कहाँ, कहाँ, कौन, कौन, कौन, किसके, क्यों, क्यों, के साथ, नहीं करेंगे, आप नहीं करेंगे , आप करेंगे, आप करेंगे, आप हैं, आपने, अपने, अपने, अपने',
  label_header_comments: 'टिप्पणियाँ',
  label_header_no_comments: 'क्या आपको कुछ कहना है?',
  label_comment: 'एक टिप्पणी जोड़ने!',
  label_comment_modified: 'संपादित',
  label_updating_comment: 'अपडेट हो रहा है...',
  label_removing_comment: 'हटा रहा है...',
  button_add_comment: 'टिप्पणी जोड़ना',
  button_update_comment: 'अद्यतन टिप्पणी',
  admin_title_index_administration: 'अनुक्रमणिका प्रबंधित करें',
  admin_button_reindex_source: 'अनुक्रमणः',
  admin_info_reindex_indexing: 'अनुक्रमण...',
  admin_info_reindex_error: 'रीइंडेक्सिंग के दौरान एक त्रुटि हुई: {{ e }}',
  admin_info_reindex_successful: 'पुन: अनुक्रमण सफलतापूर्वक प्रारंभ हो गया है',
  admin_info_reindex_info_error: 'रीइंडेक्सिंग की स्थिति को पढ़ने में त्रुटि हुई: {{ e }}',
  admin_label_reindex_path: 'स्रोत और पथ',
  admin_label_reindex_time: 'समय',
  admin_label_reindex_status: 'दर्जा',
  admin_label_reindex_noResults: 'कोई पुन: अनुक्रमण परिणाम नहीं मिला',
  footer_credit: '<a style="text-decoration: none;" href="https://github.com/cobbzilla/yuebing">यूबिंग द्वारा संचालित</a>',
  info_search_indexes_building: 'यही खोज भविष्य में और परिणाम दे सकती है। कुछ सर्च इंडेक्स को फिर से बनाया जा रहा है: {{ indexes }}',
  info_search_no_results_unverified: 'खोज परिणाम देखने के लिए, कृपया {{ email }} को भेजे गए लिंक का उपयोग करके अपना खाता सत्यापित करें',
  label_metadata: 'फ़ाइल मेटाडेटा',
  label_mediainfo: 'फ़ाइल मीडियाइन्फो',
  label_add_tag: 'टैग जोड़ो',
  label_adding_tag: 'टैग जोड़ा जा रहा है...',
  label_removing_tag: 'टैग हटाया जा रहा है...',
  label_scan_ignoreErrors: 'पिछली त्रुटियों पर ध्यान न दें',
  label_scan_overwrite: 'मौजूदा फ़ाइलें अधिलेखित करें',
  label_scan_reprocess: 'पुन: संसाधित',
  label_scan_reprocess_profiles: 'इन प्रोफाइलों को पुन: संसाधित करें',
  label_path: 'रास्ता',
  label_select_all: 'सभी का चयन करे',
  locale_text_list_separator: ',',
  admin_title_source_browser: 'स्रोत ब्राउज़ करें',
  admin_title_reindex_status: 'अनुक्रमण स्थिति',
  admin_button_browse_source: 'ब्राउज़',
  admin_label_scan_config: 'स्कैन कॉन्फ़िगर करें: {{ source }}',
  admin_label_scan_olderThan: 'उस मीडिया पर ध्यान न दें जिसे एक विशिष्ट तिथि और समय के बाद संसाधित किया गया है',
  admin_button_delete_path: 'मिटाना',
  admin_button_rebuildSearchIndex: 'खोज सूचकांक का पुनर्निर्माण करें',
  admin_button_rebuildSearchIndex_warning: 'यह सभी स्रोतों में खोज अनुक्रमणिका का पुनर्निर्माण करेगा और इसमें बहुत लंबा समय लग सकता है',
  admin_info_path_delete: 'पथ हटाया जा रहा है...',
  label_editor: 'संपादक?',
  label_noCache: 'कैश रीसेट करें?',
  label_previous_page: 'परिणामों का पिछला पृष्ठ',
  label_next_page: 'परिणाम का अगला पृष्ठ',
  label_results_info: 'कुल {{ start }} का {{ end }} से {{ total }} परिणाम दिखा रहा है',
  label_playback_quality: 'प्लेबैक गुणवत्ता',
  label_playback_quality_auto: 'स्वचालित'
}
