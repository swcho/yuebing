export default {
  id: 'mr',
  emoji: '🇮🇳',
  anonymous_user_name: 'रहस्यमय',
  welcome_public: '{{ title }} मध्ये आपले स्वागत आहे!',
  welcome_user: '{{ title }} , {{user.firstName || user.email.includes("@") ? user.email.substring(0, user.email.indexOf("@")) : user.email}} मध्ये आपले स्वागत आहे !',
  title_login: 'साइन इन करा',
  title_register: 'साइन अप करा',
  title_verifying: 'खाते सत्यापित करत आहे...',
  title_requestPasswordReset: 'पासवर्ड रीसेट करा',
  title_resetPassword: 'नवीन पासवर्ड सेट करा',
  title_verifying_ended: 'पडताळणी संपली',
  title_profile: 'खाते माहिती',
  button_profile: 'माझे खाते',
  button_update: 'जतन करा',
  info_profile_update: 'तुमची खाते माहिती यशस्वीरित्या अपडेट केली गेली',
  button_reset_password: 'पासवर्ड रीसेट करा',
  button_delete_my_account: 'माझे खाते हटवा (पूर्ववत केले जाऊ शकत नाही)',
  label_confirm_user_delete: 'तुमचे खाते हटवल्याची पुष्टी करा. ही क्रिया अपरिवर्तनीय आहे!',
  label_email: 'ईमेल',
  label_username: 'वापरकर्तानाव',
  label_usernameOrEmail: 'वापरकर्तानाव किंवा ईमेल',
  label_firstName: 'पहिले नाव',
  label_lastName: 'आडनाव',
  label_name: 'नाव',
  label_password: 'पासवर्ड',
  label_newPassword: 'नवीन पासवर्ड',
  label_locale: 'इंग्रजी',
  label_token: 'सत्यापन टोकन',
  label_ctime: 'तयार केले',
  label_mtime: 'सुधारित',
  button_login: 'साइन इन करा',
  button_logout: 'साइन आउट करा',
  button_register: 'साइन अप करा',
  button_forgot_password: 'तुमचा पासवर्ड विसरलात?',
  button_send_password_reset_email: 'पाठवा',
  button_set_new_password: 'पासवर्ड सेट करा',
  info_password_reset_email_sent: 'एक ईमेल संदेश {{ email }} वर पाठविला गेला, तुमचा पासवर्ड रीसेट करण्यासाठी लिंकसाठी तुमचा इनबॉक्स तपासा',
  info_password_reset_email_error: 'एरर आली आणि तुमचा मेसेज पाठवला गेला नसावा. कृपया पुन्हा प्रयत्न करा',
  info_password_reset_try_again: 'पुन्हा प्रयत्न करा',
  info_verify_token_error: 'सत्यापन टोकन कालबाह्य झाले आहे किंवा अन्यथा अवैध आहे',
  info_registration_not_allowed: '{{ title }} च्या ऑपरेटरने खाते तयार करणे अक्षम केले आहे',
  button_invite_friends: 'तुमच्या मित्रांना {{ title }} मध्ये आमंत्रित करा!',
  label_friend_emails: 'स्वल्पविरामाने किंवा स्पेसने विभक्त केलेल्या ईमेलची सूची',
  button_send_invitations: 'आमंत्रणे पाठवा',
  info_invite_friends_header: 'तुमच्या मित्रांना {{ title }} मध्ये आमंत्रित करा!',
  info_invite_friends_subheader: 'येथे काही ईमेल पत्ते प्रविष्ट करा आणि आम्ही त्यांना आमंत्रण पाठवू',
  info_invite_friends_limited_registration: '{{ title }} च्या ऑपरेटरकडे विशिष्ट लोकांसाठी मर्यादित नोंदणी आहे. आमंत्रणे पाठवण्‍यासाठी तुमचे स्‍वागत आहे, परंतु हे वापरकर्त्‍यांनी यशस्वीरित्या खाते तयार करण्‍यापूर्वी साइट अॅडमिनिस्ट्रेटरने मंजूर केलेल्या वापरकर्त्यांची यादी देखील जोडली पाहिजे.',
  info_invite_friends_disabled_no_email: '&quot;मित्रांना आमंत्रित करा&quot; वैशिष्ट्य अक्षम केले आहे कारण ईमेल {{ title }} वर कॉन्फिगर केले गेले नाही',
  info_invite_friends_enabled_no_email: '&quot;मित्रांना आमंत्रित करा&quot; वैशिष्ट्य सक्षम केले आहे परंतु ईमेल {{ title }} वर कॉन्फिगर केले गेले नाही, त्यामुळे ते वापरले जाऊ शकत नाही',
  info_invitation_success_results: 'तुमचे आमंत्रण यशस्वीरित्या {{ successCount }} मित्रांना पाठवले गेले',
  info_invitation_error_results: 'तुमचे आमंत्रण {{ errorCount }} मित्रांना वितरित केले जाऊ शकले नाही',
  label_search: 'शोधा',
  button_search: 'शोधा',
  label_sort: 'यानुसार क्रमवारी लावा',
  label_sort_order: 'ऑर्डर करा',
  label_sort_ascending: 'चढत्या',
  label_sort_descending: 'उतरत्या',
  title_browsing_folder: 'फोल्डर: {{ folder }}',
  button_back_to: '{{ prefix }} कडे परत',
  button_back_to_root_folder: 'वरच्या स्तरावर परत',
  info_search_no_results: 'येथे काहीतरी असावे याची चारशे चार कारणे आहेत, परंतु येथे काहीही नाही',
  label_media_unprocessed: '(प्रक्रिया न केलेले)',
  button_show_media_info: 'मीडिया माहिती दाखवा',
  button_hide_media_info: 'मीडिया माहिती लपवा',
  button_show_thumbnails: 'लघुप्रतिमा दर्शवा',
  button_hide_thumbnails: 'लघुप्रतिमा लपवा',
  button_previous_thumbnail: 'मागील',
  button_next_thumbnail: 'पुढे',
  thumbnail_alt_text: '{{ name }} साठी लघुप्रतिमा',
  label_selected_thumbnail: '~ निवडले ~',
  button_select_thumbnail: 'ही लघुप्रतिमा निवडा',
  info_no_thumbnails_found: '(कोणतीही लघुप्रतिमा सापडली नाहीत)',
  button_show_metadata: 'मेटाडेटा दाखवा',
  button_hide_metadata: 'मेटाडेटा लपवा',
  error_field_required: '{{ field }} आवश्यक आहे',
  error_field_invalid: '{{ field }} वैध नाही',
  error_field_regex: '{{ field }} वैध नाही',
  error_field_min: '{{ field }} खूप लहान आहे',
  error_field_max: '{{ field }} खूप लांब आहे',
  error_field_min_value: '{{ field }} खूप लहान आहे',
  error_field_max_value: '{{ field }} खूप मोठे आहे',
  error_field_email: '{{ field }} हा वैध ईमेल पत्ता नाही',
  error_field_cannotDeleteSelf: 'तुम्ही स्वतःला हटवू शकत नाही',
  error_field_alreadyExists: '{{ thing }} सह {{ field.toLowerCase() }} आधीपासून अस्तित्वात आहे',
  error_field_readOnly: '{{ field }} केवळ वाचनीय आहे',
  error_field_accountNotFound: 'खाते सापडले नाही किंवा पासवर्ड चुकीचा आहे',
  error_field_alreadyRegistered: 'या {{ field.toLowerCase() }} चे खाते आधीपासून अस्तित्वात आहे',
  error_field_registrationNotAllowed: 'साइट ऑपरेटरने खाते तयार करणे अक्षम केले आहे',
  error_field_url: '{{ field }} ही वैध URL नाही',
  error_field_host: '{{ field }} हे वैध होस्टनाव नाही',
  error_field_locale: '{{ field }} हे वैध लोकॅल नाही',
  error_field_source: '{{ field }} हे स्त्रोताचे नाव नाही. फक्त अक्षरे, संख्या आणि हे विशेष वर्ण वापरा: कालावधी (.), हायफन (-) आणि अंडरस्कोर (_)',
  error_field_notFound: '{{ field }} शक्य झाले नाही',
  error_field_path: '{{ field }} हा वैध मार्ग नाही',
  error_field_cannotMirrorToSame: 'वाचा स्रोत आणि लेखन स्रोत समान स्रोत असू शकत नाही',
  error_field_raw_hex: '{{ field }} ही हेक्साडेसिमल संख्या नाही (अग्रगण्य 0x अनुमत नाही)',
  error_field_hex: '{{ field }} ही हेक्साडेसिमल संख्या नाही',
  error_field_username: '{{ field }} हे वैध वापरकर्तानाव नाही. अक्षराने सुरुवात करणे आवश्यक आहे आणि त्यात फक्त अक्षरे, संख्या, अंडरस्कोअर (_), हायफन (-) आणि ठिपके (.) असणे आवश्यक आहे.',
  locale_en: 'इंग्रजी',
  locale_es: 'स्पॅनिश',
  locale_it: 'इटालियन',
  locale_fr: 'फ्रेंच',
  locale_de: 'जर्मन',
  locale_ar: 'अरबी',
  locale_bn: 'बंगाली',
  locale_hi: 'हिंदी',
  locale_id: 'इंडोनेशियन',
  locale_ja: 'जपानी',
  locale_ko: 'कोरियन',
  locale_pl: 'पोलिश',
  locale_pt: 'पोर्तुगीज',
  locale_ru: 'रशियन',
  locale_ur: 'उर्दू',
  locale_sw: 'स्वाहिली',
  locale_tl: 'टागालॉग',
  locale_vi: 'व्हिएतनामी',
  locale_zh: 'चिनी',
  label_date: '{{MMM}} {{d}} , {{YYYY}}',
  label_date_short: '{{M}} / {{d}} / {{YYYY}}',
  label_date_and_time: '{{MMM}} {{d}} , {{YYYY}} / {{h}} : {{m}} {{a}}',
  label_date_and_time_short: '{{M}} / {{d}} / {{YYYY}} {{h}} : {{m}} {{a}}',
  label_date_undefined: 'तारीख/वेळ सेट नाही',
  label_date_day_half_am: 'आहे',
  label_date_day_half_pm: 'पीएम',
  label_date_day_0: 'रविवार',
  label_date_day_1: 'सोमवार',
  label_date_day_2: 'मंगळवार',
  label_date_day_3: 'बुधवार',
  label_date_day_4: 'गुरुवार',
  label_date_day_5: 'शुक्रवार',
  label_date_day_6: 'शनिवार',
  label_date_day_short_0: 'रवि',
  label_date_day_short_1: 'सोम',
  label_date_day_short_2: 'मंगळ',
  label_date_day_short_3: 'बुध',
  label_date_day_short_4: 'गुरु',
  label_date_day_short_5: 'शुक्र',
  label_date_day_short_6: 'शनि',
  label_date_month_0: 'जानेवारी',
  label_date_month_1: 'फेब्रुवारी',
  label_date_month_2: 'मार्च',
  label_date_month_3: 'एप्रिल',
  label_date_month_4: 'मे',
  label_date_month_5: 'जून',
  label_date_month_6: 'जुलै',
  label_date_month_7: 'ऑगस्ट',
  label_date_month_8: 'सप्टेंबर',
  label_date_month_9: 'ऑक्टोबर',
  label_date_month_10: 'नोव्हेंबर',
  label_date_month_11: 'डिसेंबर',
  label_date_month_short_0: 'जाने',
  label_date_month_short_1: 'फेब्रु',
  label_date_month_short_2: 'मार्च',
  label_date_month_short_3: 'एप्रिल',
  label_date_month_short_4: 'मे',
  label_date_month_short_5: 'जून',
  label_date_month_short_6: 'जुल',
  label_date_month_short_7: 'ऑगस्ट',
  label_date_month_short_8: 'सप्टें',
  label_date_month_short_9: 'ऑक्टो',
  label_date_month_short_10: 'नोव्हें',
  label_date_month_short_11: 'डिसें',
  label_date_month_number_0: '१',
  label_date_month_number_1: '2',
  label_date_month_number_2: '3',
  label_date_month_number_3: '3',
  label_date_month_number_4: '५',
  label_date_month_number_5: '6',
  label_date_month_number_6: '७',
  label_date_month_number_7: '8',
  label_date_month_number_8: '९',
  label_date_month_number_9: '10',
  label_date_month_number_10: '11',
  label_date_month_number_11: '12',
  label_duration_days: 'दिवस',
  label_duration_hours: 'तास',
  label_duration_minutes: 'मिनिटे',
  label_duration_seconds: 'सेकंद',
  hint_readonly: '(फक्त वाचा)',
  label_mediainfo_title: 'शीर्षक',
  label_mediainfo_artist: 'कलाकार',
  label_mediainfo_album_artist: 'अल्बम कलाकार',
  label_mediainfo_author: 'लेखक',
  label_mediainfo_composer: 'संगीतकार',
  label_mediainfo_year: 'वर्ष',
  label_mediainfo_copyright: 'कॉपीराइट',
  label_mediainfo_album: 'अल्बम',
  label_mediainfo_movie: 'चित्रपट',
  label_mediainfo_description: 'वर्णन',
  label_mediainfo_comment: 'टिप्पणी',
  label_mediainfo_genre: 'शैली',
  label_mediainfo_location: 'स्थान',
  label_mediainfo_show: 'दाखवा',
  label_mediainfo_episode: 'भाग',
  label_mediainfo_episode_sort: 'भाग (क्रमवारी)',
  label_mediainfo_season: 'हंगाम',
  label_mediainfo_lyrics: 'गाण्याचे बोल',
  label_mediainfo_tags: 'टॅग्ज',
  label_mediainfo_duration: 'कालावधी',
  label_mediainfo_width: 'रुंदी',
  label_mediainfo_height: 'उंची',
  label_mediainfo_size: 'आकार',
  label_mediainfo_videoTracks: 'व्हिडिओ ट्रॅक',
  label_mediainfo_audioTracks: 'ऑडिओ ट्रॅक',
  label_mediainfo_format: 'स्वरूप',
  label_mediainfo_contentType: 'सामग्री प्रकार',
  label_mediainfo_bitRate: 'बिट दर',
  label_mediainfo_frameRate: 'फ्रेम दर',
  label_mediainfo_dateEncoded: 'एन्कोड केलेली तारीख',
  button_admin: 'साइट कॉन्फिगरेशन',
  admin_title_site_administration: '{{ title }} प्रशासन',
  admin_title_manage_configuration: 'सिस्टम कॉन्फिगरेशन',
  admin_title_source_administration: 'स्रोत प्रशासन',
  admin_title_user_administration: 'वापरकर्ता प्रशासन',
  admin_title_migrate_data: 'डेटा स्थलांतरित करा',
  admin_title_transform_queue: 'मीडिया ट्रान्सफॉर्म रांग',
  admin_title_site_administration_publicConfig: 'सार्वजनिक कॉन्फिगरेशन',
  admin_title_site_administration_privateConfig: 'खाजगी कॉन्फिगरेशन',
  admin_button_save_config: 'जतन करा',
  admin_info_config_updated: 'सिस्टम कॉन्फिगरेशन यशस्वीरित्या अपडेट केले',
  admin_label_publicConfig_title: 'साइट शीर्षक',
  admin_label_publicConfig_siteUrl: 'साइट URL',
  admin_label_publicConfig_public: 'सार्वजनिक?',
  admin_label_publicConfig_allowRegistration: 'नोंदणीला परवानगी द्यायची?',
  admin_label_publicConfig_limitRegistration: 'नोंदणी मर्यादा',
  admin_label_publicConfig_inviteFriendsEnabled: 'लॉग इन केलेल्या वापरकर्त्यांना &#39;मित्रांना आमंत्रित करा&#39; दाखवायचे?',
  admin_label_publicConfig_locales: 'लोकल',
  admin_label_publicConfig_defaultLocale: 'डीफॉल्ट लोकेल',
  admin_label_publicConfig_emailEnabled: 'ईमेल सक्षम केले?',
  admin_label_publicConfig_timeout: 'कालबाह्यता',
  admin_label_publicConfig_timeout_verify: 'खाते पडताळणी टोकन कालबाह्य',
  admin_label_publicConfig_timeout_resetPassword: 'पासवर्ड टोकन टाइमआउट रीसेट करा',
  admin_label_privateConfig_admin: 'प्रशासक सेटिंग्ज',
  admin_label_privateConfig_admin_user: 'प्रशासन वापरकर्ता',
  admin_label_privateConfig_admin_user_email: 'ईमेल',
  admin_label_privateConfig_admin_user_username: 'वापरकर्तानाव',
  admin_label_privateConfig_admin_user_password: 'पासवर्ड',
  admin_label_privateConfig_admin_user_firstName: 'पहिले नाव',
  admin_label_privateConfig_admin_user_lastName: 'आडनाव',
  admin_label_privateConfig_admin_user_locale: 'लोकल',
  admin_label_privateConfig_admin_overwrite: 'अधिलिखित करायचे?',
  admin_label_privateConfig_email: 'SMTP सेटिंग्ज',
  admin_label_privateConfig_email_host: 'यजमान',
  admin_label_privateConfig_email_port: 'बंदर',
  admin_label_privateConfig_email_user: 'वापरकर्तानाव',
  admin_label_privateConfig_email_password: 'पासवर्ड',
  admin_label_privateConfig_email_secure: 'सुरक्षित?',
  admin_label_privateConfig_email_fromEmail: 'सिस्टम ईमेल पत्ता',
  admin_label_privateConfig_redis: 'सेटिंग्ज पुन्हा करा',
  admin_label_privateConfig_redis_host: 'यजमान',
  admin_label_privateConfig_redis_port: 'बंदर',
  admin_label_privateConfig_redis_flushAtStartup: 'स्टार्टअपवर फ्लश?',
  admin_label_privateConfig_redis_listingCacheExpiration: 'सूची कॅशे कालबाह्यता',
  admin_label_privateConfig_redis_manifestCacheExpiration: 'मॅनिफेस्ट कॅशे कालबाह्यता',
  admin_label_privateConfig_media: 'मीडिया सपोर्ट',
  admin_label_privateConfig_media_video: 'व्हिडिओ',
  admin_label_privateConfig_media_video_allowedCommands: 'परवानगी दिलेल्या आज्ञा',
  admin_label_privateConfig_encryption: 'एनक्रिप्शन सेटिंग्ज',
  admin_label_privateConfig_encryption_key: 'एनक्रिप्शन की',
  admin_label_privateConfig_encryption_iv: 'इनिशियलायझेशन वेक्टर (IV)',
  admin_label_privateConfig_encryption_algo: 'अल्गोरिदम',
  admin_label_privateConfig_encryption_bcryptRounds: 'Bcrypt फेऱ्या',
  admin_label_privateConfig_session: 'सत्र सेटिंग्ज',
  admin_label_privateConfig_session_expiration: 'सत्र कालबाह्य',
  admin_label_privateConfig_autoscan: 'ऑटोस्कॅन सेटिंग्ज',
  admin_label_privateConfig_autoscan_enabled: 'ऑटोस्कॅन सक्षम करा',
  admin_label_privateConfig_autoscan_interval: 'नियमित स्कॅन अंतराल',
  admin_label_privateConfig_autoscan_initialDelay: 'स्टार्टअप स्कॅन विलंब',
  admin_label_privateConfig_autoscan_showTransformOutput: 'लॉग ट्रान्सफॉर्म आउटपुट?',
  admin_label_privateConfig_autoscan_cleanupTemporaryAssets: 'तात्पुरत्या फाइल्स साफ करायच्या?',
  admin_label_privateConfig_autoscan_deleteIncompleteUploads: 'अपूर्ण अपलोड साफ करायचे?',
  admin_label_privateConfig_autoscan_concurrency: 'समरूपता',
  admin_label_total_user_count: '{{ totalUserCount }} एकूण वापरकर्ते',
  admin_button_delete_user: 'वापरकर्ता हटवा',
  admin_label_confirm_user_delete: 'कृपया वापरकर्त्याच्या हटविण्याची पुष्टी करा: {{ email }}',
  label_configCategory: 'कॉन्फिगरेशन श्रेणी',
  admin_button_add_source: 'स्त्रोत जोडा',
  admin_title_add_source: 'स्त्रोत जोडा',
  admin_button_delete_source: 'स्रोत हटवा',
  admin_button_scan_source: 'स्कॅन करा',
  admin_info_scan_scanning: 'स्कॅन करत आहे...',
  admin_info_scan_successful: 'स्कॅन यशस्वीरित्या सुरू झाले आहे',
  admin_info_scan_error: 'स्कॅन दरम्यान एक त्रुटी आली',
  admin_label_confirm_source_delete: 'कृपया स्रोत हटवल्याची पुष्टी करा: {{ source }}',
  admin_info_source_added: 'नवीन स्रोत &#39; {{ source }} &#39; यशस्वीरित्या जोडला गेला',
  admin_info_source_add_error: 'स्रोत &#39; {{ source }} &#39; जोडताना त्रुटी आली',
  admin_label_source_name: 'स्त्रोताचे नाव',
  admin_label_self_source: '{{ title }} स्टोरेज',
  admin_label_source_type: 'स्रोत प्रकार',
  admin_label_source_readOnly: 'फक्त वाचा?',
  admin_label_source_cacheSize: 'सूची कॅशे आकार (अक्षम करण्यासाठी शून्य)',
  admin_label_source_encryption_enable: 'एनक्रिप्शन सक्षम करा',
  admin_label_source_encryption_key: 'एनक्रिप्शन की',
  admin_label_source_encryption_iv: 'इनिशियलायझेशन वेक्टर (IV)',
  admin_label_source_encryption_algo: 'अल्गोरिदम',
  label_sourceType_local: 'स्थानिक फाइल सिस्टम',
  label_sourceType_local_field_key: 'माउंट निर्देशिका',
  label_sourceType_local_field_mode: 'फाइल/डिरेक्टरी निर्मिती मोड',
  label_sourceType_s3: 'ऍमेझॉन S3',
  label_sourceType_s3_field_key: 'AWS प्रवेश की',
  label_sourceType_s3_field_secret: 'AWS गुप्त की',
  label_sourceType_s3_field_bucket: 'S3 बादली',
  label_sourceType_s3_field_region: 'AWS प्रदेश',
  label_sourceType_s3_field_prefix: 'बादली उपसर्ग',
  label_sourceType_s3_field_delimiter: 'परिसीमक',
  label_sourceType_b2: 'बॅकब्लेझ B2',
  label_sourceType_b2_field_key: 'की आयडी',
  label_sourceType_b2_field_secret: 'अर्ज की',
  label_sourceType_b2_field_bucket: 'B2 बकेट आयडी (नाव नाही)',
  label_sourceType_b2_field_partSize: 'भाग आकार',
  label_sourceType_b2_field_prefix: 'बादली उपसर्ग',
  label_sourceType_b2_field_delimiter: 'परिसीमक',
  admin_label_firstEvent: 'पहिली घटना',
  admin_label_lastEvent: 'शेवटचा कार्यक्रम',
  admin_label_eventTime: 'वेळ',
  admin_label_eventName: 'कार्यक्रम',
  admin_label_eventDescription: 'वर्णन',
  admin_label_xformQueueEmpty: 'सक्रिय नोकऱ्या नाहीत',
  admin_label_migration_noSources: 'कोणतेही स्रोत परिभाषित केलेले नाहीत',
  admin_label_migration_results: 'स्थलांतर परिणाम:',
  admin_label_migration_readSource: 'डेटा स्थलांतरित करण्यासाठी स्त्रोत',
  admin_label_migration_readPath: 'पथातून वाचा (फाइलसिस्टम रूटसाठी रिक्त)',
  admin_label_readSource: 'स्रोत वाचा',
  admin_label_readPath: 'मार्ग वाचा',
  admin_label_migration_writeSource: 'डेटा लिहिण्यासाठी स्त्रोत',
  admin_label_migration_writePath: 'मार्गावर लिहा (फाइलसिस्टम रूटसाठी रिक्त)',
  admin_label_writeSource: 'स्रोत लिहा',
  admin_label_writePath: 'मार्ग लिहा',
  admin_button_migrate_data: 'डेटा स्थलांतरित करा',
  admin_info_migration_success: 'डेटा यशस्वीरित्या स्थलांतरित झाला',
  admin_info_migration_error: 'डेटा स्थलांतरित करताना एक त्रुटी आली',
  http_invalid_request_method: 'HTTP विनंती पद्धत {{ method }} या एंडपॉइंटद्वारे समर्थित नाही',
  locale_ha: 'हौसा',
  locale_mr: 'मराठी',
  locale_tr: 'तुर्की',
  info_search_searching: '...',
  search_stop_words: 'अ,बद्दल,वर,नंतर,पुन्हा,सर्वांच्या विरुद्ध,आम,अन,आणि,कोणतेही,आहे,नाही,तसे,असणे,कारण,आधी,असणे,खाली,दरम्यान,दोन्ही,पण, द्वारे,करू शकत नाही,करू शकत नाही,करू शकत नाही,करू शकत नाही,करू शकत नाही,करतो,करत नाही,करत नाही,नाही,खाली,दरम्यान,प्रत्येक,काही,साठी,कडून,पुढे,होता, नव्हते, होते, नव्हते, नव्हते, नव्हते, होते, तो, तो, तो, तो, ती, येथे, येथे आहे, तिचा, स्वतः, तो, स्वतः, त्याचे, कसे, कसे आहे मी,मी,मी,करेन,मी,माझ्याकडे,जर,मध्‍ये,आहे,नाही,ते,ते,ते,स्वतः,चला,मी,अधिक,बहुतेक,करू नये, माझे,स्वतःचे,नाही,नाही,नाही,चे,बंद,चालू,एकदा,फक्त,किंवा,दुसरे,पाहिजे,आपले,आपले,आपले,बाहेर,वर,स्वतःचे,तेच,नाही,ती,तिने,ती \'होईल,तिने,पाहिजे,नाही,तसे,काही,असे,त्यापेक्षा,ते,ते,ते,त्यांच्या,त्यांच्या,ते,ते,ते,ते,ते,ते,ते,ते,ते,ते,ते करतील ,ते आहेत,त्यांच्याकडे,हे,त्या,माध्यमातून,तेही,खाली,तोपर्यंत,वर,uct,utc,खूप,होते,नव्हते,आम्ही,आम्ही,आम्ही करू,आम्ही आहोत ,आम्ही होतो,होतो,नव्हतो,काय,काय,केव्हा,केव्हा,कुठे,कुठे,कोणते,केव्हा,कोण,कोण,कोण,का,का,सोबत,नाही,करणार,नाही,तुम्ही ,तुम्ही,तुम्ही कराल,तुम्ही आहात,तुम्ही आहात,तुमचे,तुमचे,तुमचे,स्वतः',
  label_header_comments: 'टिप्पण्या',
  label_header_no_comments: 'तुम्हाला काही सांगायचे आहे का?',
  label_comment: 'एक टिप्पणी जोडा!',
  label_comment_modified: 'संपादित',
  label_updating_comment: 'अपडेट करत आहे...',
  label_removing_comment: 'काढत आहे...',
  button_add_comment: 'टिप्पणी जोडा',
  button_update_comment: 'टिप्पणी अद्यतनित करा',
  admin_title_index_administration: 'अनुक्रमणिका व्यवस्थापित करा',
  admin_button_reindex_source: 'रीइंडेक्स',
  admin_info_reindex_indexing: 'अनुक्रमणिका...',
  admin_info_reindex_error: 'रीइंडेक्सिंग दरम्यान एक त्रुटी आली: {{ e }}',
  admin_info_reindex_successful: 'रीइंडेक्सिंग यशस्वीरित्या सुरू झाले आहे',
  admin_info_reindex_info_error: 'रीइंडेक्सिंगची स्थिती वाचताना एक त्रुटी आली: {{ e }}',
  admin_label_reindex_path: 'स्रोत आणि मार्ग',
  admin_label_reindex_time: 'वेळ',
  admin_label_reindex_status: 'स्थिती',
  admin_label_reindex_noResults: 'कोणतेही रीइंडेक्सिंग परिणाम आढळले नाहीत',
  footer_credit: '<a style="text-decoration: none;" href="https://github.com/cobbzilla/yuebing">🥮 Yuebing द्वारा समर्थित</a>',
  info_search_indexes_building: 'हाच शोध भविष्यात आणखी परिणाम देऊ शकतो. काही शोध अनुक्रमणिका पुन्हा तयार केल्या जात आहेत: {{ indexes }}',
  info_search_no_results_unverified: 'शोध परिणाम पाहण्यासाठी, कृपया {{ email }} वर पाठवलेल्या लिंकचा वापर करून तुमचे खाते सत्यापित करा',
  label_metadata: 'फाइल मेटाडेटा',
  label_mediainfo: 'फाइल मीडिया माहिती',
  label_add_tag: 'टॅग जोडा',
  label_adding_tag: 'टॅग जोडत आहे...',
  label_removing_tag: 'टॅग काढत आहे...',
  label_scan_ignoreErrors: 'मागील त्रुटींकडे दुर्लक्ष करा',
  label_scan_overwrite: 'विद्यमान फायली अधिलिखित करा',
  label_scan_reprocess: 'पुन्हा प्रक्रिया करा',
  label_scan_reprocess_profiles: 'या प्रोफाइलवर पुन्हा प्रक्रिया करा',
  label_path: 'मार्ग',
  label_select_all: 'सर्व निवडा',
  locale_text_list_separator: ',',
  admin_title_source_browser: 'स्रोत ब्राउझ करा',
  admin_title_reindex_status: 'अनुक्रमणिका स्थिती',
  admin_button_browse_source: 'ब्राउझ करा',
  admin_label_scan_config: 'स्कॅन कॉन्फिगर करा: {{ source }}',
  admin_label_scan_olderThan: 'विशिष्ट तारीख आणि वेळेनंतर प्रक्रिया केलेल्या माध्यमांकडे दुर्लक्ष करा',
  admin_button_delete_path: 'हटवा',
  admin_button_rebuildSearchIndex: 'शोध निर्देशांक पुन्हा तयार करा',
  admin_button_rebuildSearchIndex_warning: 'हे सर्व स्त्रोतांमध्ये शोध अनुक्रमणिका पुन्हा तयार करेल आणि खूप वेळ लागू शकेल',
  admin_info_path_delete: 'मार्ग हटवत आहे...',
  label_editor: 'संपादक?',
  label_noCache: 'कॅशे रीसेट करा?',
  label_previous_page: 'निकालांचे मागील पृष्ठ',
  label_next_page: 'परिणामांचे पुढील पृष्ठ',
  label_results_info: 'एकूण {{ start }} पैकी {{ end }} ते {{ total }} परिणाम दर्शवित आहे',
  label_playback_quality: 'प्लेबॅक गुणवत्ता',
  label_playback_quality_auto: 'स्वयंचलित',
  admin_label_privateConfig_redis_buildSearchIndexAtStartup: 'स्टार्टअपवर शोध निर्देशांक तयार करा',
  locale_af: 'आफ्रिकन',
  locale_sq: 'अल्बेनियन',
  locale_am: 'अम्हारिक',
  locale_hy: 'आर्मेनियन',
  locale_az: 'अझरबैजानी',
  locale_eu: 'बास्क',
  locale_be: 'बेलारूसी',
  locale_bs: 'बोस्नियन',
  locale_bg: 'बल्गेरियन',
  locale_ca: 'कॅटलान',
  locale_ceb: 'सेबुआनो',
  locale_co: 'कॉर्सिकन',
  locale_hr: 'क्रोएशियन',
  locale_cs: 'झेक',
  locale_da: 'डॅनिश',
  locale_nl: 'डच',
  locale_eo: 'एस्पेरांतो',
  locale_et: 'एस्टोनियन',
  locale_fi: 'फिनिश',
  locale_fy: 'फ्रिसियन',
  locale_gl: 'गॅलिशियन',
  locale_ka: 'जॉर्जियन',
  locale_el: 'ग्रीक',
  locale_gu: 'गुजराती',
  locale_ht: 'हैतीयन क्रेओल',
  locale_haw: 'हवाईयन',
  locale_he: 'हिब्रू',
  locale_hmn: 'हमोंग',
  locale_hu: 'हंगेरियन',
  locale_is: 'आइसलँडिक',
  locale_ig: 'इग्बो',
  locale_ga: 'आयरिश',
  locale_jv: 'जावानीज',
  locale_kn: 'कन्नड',
  locale_kk: 'कझाक',
  locale_km: 'ख्मेर',
  locale_rw: 'किन्यारवांडा',
  locale_ku: 'कुर्दिश',
  locale_ky: 'किर्गिझ',
  locale_lo: 'लाओ',
  locale_la: 'लॅटिन',
  locale_lv: 'लाटवियन',
  locale_lt: 'लिथुआनियन',
  locale_lb: 'लक्झेंबर्गिश',
  locale_mk: 'मॅसेडोनियन',
  locale_mg: 'मालागासी',
  locale_ms: 'मलय',
  locale_ml: 'मल्याळम',
  locale_mt: 'माल्टीज',
  locale_mi: 'माओरी',
  locale_mn: 'मंगोलियन',
  locale_my: 'म्यानमार (बर्मीज)',
  locale_ne: 'नेपाळी',
  locale_no: 'नॉर्वेजियन',
  locale_ny: 'न्यांजा (चिचेवा)',
  locale_or: 'ओडिया (ओरिया)',
  locale_ps: 'पश्तो',
  locale_fa: 'पर्शियन',
  locale_pa: 'पंजाबी',
  locale_ro: 'रोमानियन',
  locale_sm: 'सामोन',
  locale_gd: 'स्कॉट्स गेलिक',
  locale_sr: 'सर्बियन',
  locale_st: 'सेसोथो',
  locale_sn: 'शोना',
  locale_sd: 'सिंधी',
  locale_si: 'सिंहली (सिंहली)',
  locale_sk: 'स्लोव्हाक',
  locale_sl: 'स्लोव्हेनियन',
  locale_so: 'सोमाली',
  locale_su: 'सुंदानीज',
  locale_sv: 'स्वीडिश',
  locale_tg: 'ताजिक',
  locale_ta: 'तमिळ',
  locale_tt: 'तातार',
  locale_te: 'तेलुगु',
  locale_th: 'थाई',
  locale_tk: 'तुर्कमेन',
  locale_uk: 'युक्रेनियन',
  locale_ug: 'उईघुर',
  locale_uz: 'उझबेक',
  locale_cy: 'वेल्श',
  locale_xh: 'झोसा',
  locale_yi: 'यिद्दिश',
  locale_yo: 'योरुबा',
  locale_zu: 'झुलू',
  label_mediainfo_audioLanguage: 'भाषा (ऑडिओ)',
  label_mediainfo_videoLanguage: 'भाषा (व्हिडिओ)',
  label_mediainfo_textTrackLanguages: 'भाषा (उपशीर्षके)',
  label_mediainfo_videoTrackCount: 'व्हिडिओ ट्रॅक',
  label_mediainfo_audioTrackCount: 'ऑडिओ ट्रॅक',
  label_mediainfo_textTrackCount: 'मजकूर ट्रॅक'
}
