export default {
  id: 'ru',
  emoji: '🇷🇺',
  anonymous_user_name: 'таинственный',
  welcome_public: 'Добро пожаловать в {{ title }}!',
  welcome_user: 'Добро пожаловать в {{ title }}, {{user.firstName || user.email.includes("@") ? user.email.substring(0, user.email.indexOf("@")) : user.email}}!',
  title_login: 'Войти',
  title_register: 'Зарегистрироваться',
  title_verifying: 'Проверка аккаунта...',
  title_requestPasswordReset: 'Сброс пароля',
  title_resetPassword: 'Установить новый пароль',
  title_verifying_ended: 'Проверка завершена',
  title_profile: 'Информация Об Учетной Записи',
  button_profile: 'Мой счет',
  button_update: 'спасти',
  info_profile_update: 'Информация вашей учетной записи успешно обновлена',
  button_reset_password: 'Сброс пароля',
  button_delete_my_account: 'Удалить мой аккаунт (НЕЛЬЗЯ ОТМЕНИТЬ)',
  label_confirm_user_delete: 'Подтвердите удаление вашей учетной записи. Это действие необратимо!',
  label_email: 'Эл. адрес',
  label_username: 'Имя пользователя',
  label_usernameOrEmail: 'Имя пользователя или адрес электронной почты',
  label_firstName: 'Имя',
  label_lastName: 'Фамилия',
  label_name: 'Имя',
  label_password: 'Пароль',
  label_newPassword: 'Новый пароль',
  label_locale: 'Язык',
  label_token: 'Токен подтверждения',
  label_ctime: 'Созданный',
  label_mtime: 'Изменено',
  button_login: 'Войти',
  button_logout: 'Выход',
  button_register: 'Зарегистрироваться',
  button_forgot_password: 'Забыли свой пароль?',
  button_send_password_reset_email: 'Отправлять',
  button_set_new_password: 'Установка пароля',
  info_password_reset_email_sent: 'Сообщение электронной почты было отправлено на адрес {{ email }}. Проверьте папку "Входящие" на наличие ссылки для сброса пароля.',
  info_password_reset_email_error: 'Произошла ошибка, возможно, ваше сообщение не было отправлено. Пожалуйста, попробуйте позже',
  info_password_reset_try_again: 'Попробуйте еще раз',
  info_verify_token_error: 'Срок действия токена подтверждения истек или он недействителен по другим причинам.',
  info_registration_not_allowed: 'Оператор {{ title }} отключил создание учетной записи',
  button_invite_friends: 'Пригласите своих друзей в {{ title }}!',
  label_friend_emails: 'Список адресов электронной почты, разделенных запятыми или пробелами',
  button_send_invitations: 'Отправить приглашения',
  info_invite_friends_header: 'Пригласите своих друзей в {{ title }}!',
  info_invite_friends_subheader: 'Введите несколько адресов электронной почты здесь, и мы отправим им приглашение',
  info_invite_friends_limited_registration: 'Оператор {{ title }} ограничил регистрацию определенными людьми. Вы можете отправлять приглашения, но эти пользователи также должны быть добавлены администратором сайта в утвержденный список пользователей, прежде чем они смогут успешно создать учетную запись.',
  info_invite_friends_disabled_no_email: 'Функция "пригласить друзей" отключена, поскольку электронная почта не настроена для {{ title }}',
  info_invite_friends_enabled_no_email: 'Функция "пригласить друзей" включена, но электронная почта не настроена для {{ title }}, поэтому ее нельзя использовать.',
  info_invitation_success_results: 'Ваше приглашение было успешно отправлено {{ successCount }} друзьям',
  info_invitation_error_results: 'Ваше приглашение не может быть доставлено {{ errorCount }} друзьям',
  label_search: 'Поиск',
  button_search: 'Поиск',
  label_sort: 'Сортировать по',
  label_sort_order: 'Заказ',
  label_sort_ascending: 'Восходящий',
  label_sort_descending: 'нисходящий',
  title_browsing_folder: 'Папка: {{ folder }}',
  button_back_to: 'Назад к {{prefix}}',
  button_back_to_root_folder: 'Вернуться на высший уровень',
  info_search_no_results: 'Есть четыреста четыре причины, по которым здесь что-то должно быть, но здесь ничего нет.',
  label_media_unprocessed: '(необработанный)',
  button_show_media_info: 'показать информацию о медиа',
  button_hide_media_info: 'скрыть информацию о медиа',
  button_show_thumbnails: 'показать эскизы',
  button_hide_thumbnails: 'скрыть миниатюры',
  button_previous_thumbnail: 'предыдущий',
  button_next_thumbnail: 'следующий',
  thumbnail_alt_text: 'уменьшенное изображение для {{ name }}',
  label_selected_thumbnail: '~ выбрано ~',
  button_select_thumbnail: 'выберите эту миниатюру',
  info_no_thumbnails_found: '(миниатюры не найдены)',
  button_show_metadata: 'показать метаданные',
  button_hide_metadata: 'скрыть метаданные',
  error_field_required: '{{ field }}, обязательное для заполнения',
  error_field_invalid: '{{ field }} недействительно',
  error_field_regex: '{{ field }} недействительно',
  error_field_min: '{{ field }} слишком короткое',
  error_field_max: '{{ field }} слишком длинное',
  error_field_min_value: '{{ field }} слишком маленькое',
  error_field_max_value: '{{ field }} слишком велико',
  error_field_email: '{{ field }} не является действительным адресом электронной почты',
  error_field_cannotDeleteSelf: 'Вы не можете удалить себя',
  error_field_alreadyExists: '{{ thing }} с {{ field.toLowerCase() }} уже существует',
  error_field_readOnly: '{{ field }} доступно только для чтения',
  error_field_accountNotFound: 'Аккаунт не найден или неверный пароль',
  error_field_alreadyRegistered: 'Аккаунт с этим {{ field.toLowerCase() }} уже существует.',
  error_field_registrationNotAllowed: 'Оператор сайта отключил создание учетной записи',
  error_field_url: '{{ field }} не является допустимым URL-адресом',
  error_field_host: '{{ field }} не является допустимым именем хоста',
  error_field_locale: '{{ field }} не является допустимым языковым стандартом',
  error_field_source: '{{ field }} не является именем источника. Используйте только буквы, цифры и специальные символы: точку (.), дефис (-) и подчеркивание (_).',
  error_field_notFound: '{{ field }} не удалось найти',
  error_field_path: '{{ field }} не является допустимым путем',
  error_field_cannotMirrorToSame: 'Источник чтения и источник записи не могут быть одним и тем же источником',
  error_field_raw_hex: '{{ field }} не является шестнадцатеричным числом (начальный 0x не допускается)',
  error_field_hex: '{{ field }} не является шестнадцатеричным числом',
  error_field_username: '{{ field }} не является допустимым именем пользователя. Должен начинаться с буквы и содержать только буквы, цифры, символы подчеркивания (_), дефисы (-) и точки (.)',
  locale_en: 'Английский',
  locale_es: 'Испанский',
  locale_it: 'Итальянский',
  locale_fr: 'Французский',
  locale_de: 'Немецкий',
  locale_ar: 'Арабский',
  locale_bn: 'Бенгальский',
  locale_hi: 'Хинди',
  locale_ja: 'Японский',
  locale_ko: 'Корейский',
  locale_pt: 'Португальский',
  locale_ru: 'Русский',
  locale_sw: 'Суахили',
  locale_zh: 'Китайский язык',
  label_date: '{{MMM}} {{d}}, {{YYYY}}',
  label_date_short: '{{M}}/{{d}}/{{YYYY}}',
  label_date_and_time: '{{MMM}} {{d}}, {{YYYY}} / {{h}}:{{m}}{{a}}',
  label_date_and_time_short: '{{M}}/{{d}}/{{YYYY}} {{h}}:{{m}}{{a}}',
  label_date_undefined: 'Дата/время не установлены',
  label_date_day_half_am: 'ЯВЛЯЮСЬ',
  label_date_day_half_pm: 'ВЕЧЕРА',
  label_date_day_0: 'Воскресенье',
  label_date_day_1: 'Понедельник',
  label_date_day_2: 'Вторник',
  label_date_day_3: 'Среда',
  label_date_day_4: 'Четверг',
  label_date_day_5: 'Пятница',
  label_date_day_6: 'Суббота',
  label_date_day_short_0: 'Солнце',
  label_date_day_short_1: 'Мой',
  label_date_day_short_2: 'Вт',
  label_date_day_short_3: 'Мы б',
  label_date_day_short_4: 'Собирать',
  label_date_day_short_5: 'пт',
  label_date_day_short_6: 'Сидел',
  label_date_month_0: 'январь',
  label_date_month_1: 'февраль',
  label_date_month_2: 'Маршировать',
  label_date_month_3: 'апреля',
  label_date_month_4: 'Май',
  label_date_month_5: 'Июнь',
  label_date_month_6: 'Июль',
  label_date_month_7: 'Август',
  label_date_month_8: 'Сентябрь',
  label_date_month_9: 'Октябрь',
  label_date_month_10: 'ноябрь',
  label_date_month_11: 'Декабрь',
  label_date_month_short_0: 'Ян',
  label_date_month_short_1: 'февраль',
  label_date_month_short_2: 'март',
  label_date_month_short_3: 'апр',
  label_date_month_short_4: 'Май',
  label_date_month_short_5: 'июнь',
  label_date_month_short_6: 'июль',
  label_date_month_short_7: 'авг',
  label_date_month_short_8: 'сен',
  label_date_month_short_9: 'октябрь',
  label_date_month_short_10: 'ноябрь',
  label_date_month_short_11: 'декабрь',
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
  label_duration_days: 'дни',
  label_duration_hours: 'часы',
  label_duration_minutes: 'минуты',
  label_duration_seconds: 'секунды',
  hint_readonly: '(только для чтения)',
  label_mediainfo_title: 'Заголовок',
  label_mediainfo_artist: 'Художник',
  label_mediainfo_album_artist: 'Исполнитель альбома',
  label_mediainfo_author: 'Автор',
  label_mediainfo_composer: 'Композитор',
  label_mediainfo_year: 'Год',
  label_mediainfo_copyright: 'Авторские права',
  label_mediainfo_album: 'Альбом',
  label_mediainfo_movie: 'Кино',
  label_mediainfo_description: 'Описание',
  label_mediainfo_comment: 'Комментарий',
  label_mediainfo_genre: 'Жанр',
  label_mediainfo_location: 'Расположение',
  label_mediainfo_show: 'Показывать',
  label_mediainfo_episode: 'Эпизод',
  label_mediainfo_episode_sort: 'Эпизод (сортировка)',
  label_mediainfo_season: 'Время года',
  label_mediainfo_lyrics: 'Текст песни',
  label_mediainfo_tags: 'Теги',
  label_mediainfo_duration: 'Продолжительность',
  label_mediainfo_width: 'Ширина',
  label_mediainfo_height: 'Высота',
  label_mediainfo_size: 'Размер',
  label_mediainfo_videoTracks: 'Видеодорожки',
  label_mediainfo_audioTracks: 'Аудиодорожки',
  label_mediainfo_format: 'Формат',
  label_mediainfo_contentType: 'Тип содержимого',
  label_mediainfo_bitRate: 'Битрейт',
  label_mediainfo_frameRate: 'Частота кадров',
  label_mediainfo_dateEncoded: 'Дата закодирована',
  button_admin: 'Конфигурация сайта',
  admin_title_site_administration: '{{ title }} Администрация',
  admin_title_manage_configuration: 'Конфигурация системы',
  admin_title_source_administration: 'Администрация источника',
  admin_title_user_administration: 'Администрирование пользователей',
  admin_title_migrate_data: 'Перенести данные',
  admin_title_transform_queue: 'Очередь преобразования мультимедиа',
  admin_title_site_administration_publicConfig: 'Общедоступная конфигурация',
  admin_title_site_administration_privateConfig: 'Частная конфигурация',
  admin_button_save_config: 'Сохранять',
  admin_info_config_updated: 'Конфигурация системы успешно обновлена',
  admin_label_publicConfig_title: 'Название сайта',
  admin_label_publicConfig_siteUrl: 'адрес сайта',
  admin_label_publicConfig_public: 'Общественный?',
  admin_label_publicConfig_allowRegistration: 'Разрешить регистрацию?',
  admin_label_publicConfig_limitRegistration: 'Ограничить регистрацию',
  admin_label_publicConfig_inviteFriendsEnabled: 'Показывать «Пригласить друзей» зарегистрированным пользователям?',
  admin_label_publicConfig_locales: 'местный',
  admin_label_publicConfig_defaultLocale: 'Язык по умолчанию',
  admin_label_publicConfig_emailEnabled: 'Электронная почта включена?',
  admin_label_publicConfig_timeout: 'Тайм-ауты',
  admin_label_publicConfig_timeout_verify: 'Тайм-аут токена подтверждения учетной записи',
  admin_label_publicConfig_timeout_resetPassword: 'Тайм-аут маркера сброса пароля',
  admin_label_privateConfig_admin: 'Настройки администратора',
  admin_label_privateConfig_admin_user: 'Пользователь-администратор',
  admin_label_privateConfig_admin_user_email: 'Эл. адрес',
  admin_label_privateConfig_admin_user_password: 'Пароль',
  admin_label_privateConfig_admin_user_firstName: 'Имя',
  admin_label_privateConfig_admin_user_lastName: 'Фамилия',
  admin_label_privateConfig_admin_user_locale: 'Местный',
  admin_label_privateConfig_admin_overwrite: 'Переписать?',
  admin_label_privateConfig_email: 'Настройки SMTP',
  admin_label_privateConfig_email_host: 'Хозяин',
  admin_label_privateConfig_email_port: 'Порт',
  admin_label_privateConfig_email_user: 'Имя пользователя',
  admin_label_privateConfig_email_password: 'Пароль',
  admin_label_privateConfig_email_secure: 'Безопасный?',
  admin_label_privateConfig_email_fromEmail: 'Системный адрес электронной почты',
  admin_label_privateConfig_redis: 'Настройки Redis',
  admin_label_privateConfig_redis_host: 'Хозяин',
  admin_label_privateConfig_redis_port: 'Порт',
  admin_label_privateConfig_redis_flushAtStartup: 'Сбрасывать при запуске?',
  admin_label_privateConfig_redis_listingCacheExpiration: 'Срок действия кеша листинга',
  admin_label_privateConfig_redis_manifestCacheExpiration: 'Срок действия кэша манифеста',
  admin_label_privateConfig_media: 'Медиа поддержка',
  admin_label_privateConfig_media_video: 'видео',
  admin_label_privateConfig_media_video_allowedCommands: 'Разрешенные команды',
  admin_label_privateConfig_encryption: 'Настройки шифрования',
  admin_label_privateConfig_encryption_key: 'Ключ шифрования',
  admin_label_privateConfig_encryption_iv: 'Вектор инициализации (IV)',
  admin_label_privateConfig_encryption_algo: 'Алгоритм',
  admin_label_privateConfig_encryption_bcryptRounds: 'Bcrypt-раунды',
  admin_label_privateConfig_session: 'Настройки сеанса',
  admin_label_privateConfig_session_expiration: 'Время ожидания сеанса',
  admin_label_privateConfig_autoscan: 'Настройки автосканирования',
  admin_label_privateConfig_autoscan_enabled: 'Включить автосканирование',
  admin_label_privateConfig_autoscan_interval: 'Регулярный интервал сканирования',
  admin_label_privateConfig_autoscan_initialDelay: 'Задержка сканирования при запуске',
  admin_label_privateConfig_autoscan_showTransformOutput: 'Вывод преобразования журнала?',
  admin_label_privateConfig_autoscan_cleanupTemporaryAssets: 'Очистить временные файлы?',
  admin_label_privateConfig_autoscan_deleteIncompleteUploads: 'Удалить незавершенные загрузки?',
  admin_label_privateConfig_autoscan_concurrency: 'параллелизм',
  admin_label_total_user_count: '{{ totalUserCount }} всего пользователей',
  admin_button_delete_user: 'Удалить пользователя',
  admin_label_confirm_user_delete: 'Пожалуйста, подтвердите удаление пользователя: {{ email }}',
  label_configCategory: 'Категория конфигурации',
  admin_button_add_source: 'Добавить источник',
  admin_title_add_source: 'Добавить источник',
  admin_button_delete_source: 'Удалить источник',
  admin_button_scan_source: 'Сканировать',
  admin_info_scan_scanning: 'Сканирование...',
  admin_info_scan_successful: 'Сканирование успешно началось',
  admin_info_scan_error: 'Произошла ошибка во время сканирования',
  admin_label_confirm_source_delete: 'Подтвердите удаление источника: {{ source }}',
  admin_info_source_added: 'Новый источник \'{{ source }}\' успешно добавлен',
  admin_info_source_add_error: 'Произошла ошибка при добавлении источника \'{{ source }}\'',
  admin_label_source_name: 'Имя источника',
  admin_label_self_source: '{{ title }} хранилище',
  admin_label_source_type: 'Тип источника',
  admin_label_source_readOnly: 'Только для чтения?',
  admin_label_source_cacheSize: 'Размер кеша списка (нуль, чтобы отключить)',
  admin_label_source_encryption_enable: 'Включить шифрование',
  admin_label_source_encryption_key: 'Ключ шифрования',
  admin_label_source_encryption_iv: 'Вектор инициализации (IV)',
  admin_label_source_encryption_algo: 'Алгоритм',
  label_sourceType_local: 'Локальная файловая система',
  label_sourceType_local_field_baseDir: 'Смонтировать каталог',
  label_sourceType_local_field_mode: 'Режим создания файла/каталога',
  label_sourceType_s3: 'Амазонка S3',
  label_sourceType_s3_field_key: 'Ключ доступа к AWS',
  label_sourceType_s3_field_secret: 'Секретный ключ АМС',
  label_sourceType_s3_field_bucket: 'Ведро S3',
  label_sourceType_s3_field_region: 'Регион AWS',
  label_sourceType_s3_field_prefix: 'Префикс корзины',
  label_sourceType_s3_field_delimiter: 'Разделитель',
  label_sourceType_b2: 'Бэкблейз B2',
  label_sourceType_b2_field_key: 'Идентификатор ключа',
  label_sourceType_b2_field_secret: 'Ключ приложения',
  label_sourceType_b2_field_bucket: 'Идентификатор корзины B2 (не имя)',
  label_sourceType_b2_field_partSize: 'Размер детали',
  label_sourceType_b2_field_prefix: 'Префикс корзины',
  label_sourceType_b2_field_delimiter: 'Разделитель',
  admin_label_firstEvent: 'первое событие',
  admin_label_lastEvent: 'последнее событие',
  admin_label_eventTime: 'время',
  admin_label_eventName: 'мероприятие',
  admin_label_eventDescription: 'описание',
  admin_label_xformQueueEmpty: 'Нет активных вакансий',
  admin_label_migration_noSources: 'Источники не определены',
  admin_label_migration_results: 'Результаты миграции:',
  admin_label_migration_readSource: 'Источник для переноса данных',
  admin_label_migration_readPath: 'Чтение из пути (пусто для корня файловой системы)',
  admin_label_readSource: 'Читать источник',
  admin_label_readPath: 'Путь чтения',
  admin_label_migration_writeSource: 'Источник для записи данных',
  admin_label_migration_writePath: 'Запись в путь (пусто для корня файловой системы)',
  admin_label_writeSource: 'Написать источник',
  admin_label_writePath: 'Написать путь',
  admin_button_migrate_data: 'Перенести данные',
  admin_info_migration_success: 'Данные успешно перенесены',
  admin_info_migration_error: 'Произошла ошибка при переносе данных',
  http_invalid_request_method: 'Метод HTTP-запроса {{ method }} не поддерживается этой конечной точкой.',
  admin_label_privateConfig_admin_user_username: 'Имя пользователя',
  locale_id: 'индонезийский',
  locale_ur: 'урду',
  locale_tl: 'тагальский',
  locale_pl: 'польский',
  locale_vi: 'вьетнамский',
  locale_ha: 'Хауса',
  locale_mr: 'Маранти',
  locale_tr: 'турецкий',
  info_search_searching: '...',
  search_stop_words: 'а,о,наверху,после,снова,против,всех,есть,и,какие-либо,являются,не,как,на,быть,потому что,были,раньше,были,ниже,между,оба,но, путем, не может, не может, мог, не мог, не делал, не делал, не делает, не делал, не делал, вниз, во время, каждый, несколько, ибо, из, далее, имел, не имел, не имел, не имел, не имел, имея, он, он, он, он, ее, здесь, здесь, ее, ее, его, сам, его, как, как, я, я, я, я, я, если, в, в, есть, не, это, это, это, само, давайте, мне, больше, больше всего, не надо, мой, я, нет, ни, не, из, от, на, когда-то, только или, другой, должен, наш, наш сам, из, над, собственный, тот же, не должен, она, она, она будет,она,должна,не должна,так,некоторые,такие,чем,что,это,их,их,их,себя,тогда,там,там,эти,они,они бы,они будут ,они,у них есть,это,те,через,до,тоже,под,пока,вверх,uct,utc,очень,было,не было,мы,мы,мы,мы,мы ,мы,были,не были,что,что,когда,когда,где,где,что,в то время как,кто,кто,кому,почему,почему,с,не будет,не будет,не будет,ты , вы, вы, вы, вы, вы, ваш, ваш, себя, себя',
  label_header_comments: 'Комментарии',
  label_header_no_comments: 'Вам есть что сказать?',
  label_comment: 'добавить комментарий!',
  label_comment_modified: 'отредактировано',
  label_updating_comment: 'обновление...',
  label_removing_comment: 'удаление...',
  button_add_comment: 'добавить комментарий',
  button_update_comment: 'обновить комментарий',
  admin_title_index_administration: 'Управление индексами',
  admin_button_reindex_source: 'Переиндексировать',
  admin_info_reindex_indexing: 'Индексирование...',
  admin_info_reindex_error: 'При переиндексации произошла ошибка: {{ e }}',
  admin_info_reindex_successful: 'Переиндексация успешно началась',
  admin_info_reindex_info_error: 'Произошла ошибка при чтении статуса переиндексации: {{ e }}',
  admin_label_reindex_path: 'Источник и путь',
  admin_label_reindex_time: 'Время',
  admin_label_reindex_status: 'Статус',
  admin_label_reindex_noResults: 'Результаты переиндексации не найдены',
  footer_credit: '<a style="text-decoration: none;" href="https://github.com/cobbzilla/yuebing">Создано 🥮 Юэбин</a>',
  info_search_indexes_building: 'Этот же поиск может дать больше результатов в будущем. Некоторые поисковые индексы перестраиваются: {{ indexes }}',
  info_search_no_results_unverified: 'Чтобы увидеть результаты поиска, подтвердите свою учетную запись, используя ссылку, отправленную на {{ email }}',
  label_metadata: 'метаданные файла',
  label_mediainfo: 'файл mediainfo',
  label_add_tag: 'Добавить метку',
  label_adding_tag: 'добавление тега...',
  label_removing_tag: 'удаление тега...',
  label_scan_ignoreErrors: 'Игнорировать предыдущие ошибки',
  label_scan_overwrite: 'Перезаписать существующие файлы',
  label_scan_reprocess: 'Переработать',
  label_scan_reprocess_profiles: 'Повторно обработайте эти профили',
  label_path: 'Дорожка',
  label_select_all: 'Выбрать все',
  locale_text_list_separator: ',',
  admin_title_source_browser: 'Просмотр источников',
  admin_title_reindex_status: 'Статус индексации',
  admin_button_browse_source: 'Просматривать',
  admin_label_scan_config: 'Настроить сканирование: {{ source }}',
  admin_label_scan_olderThan: 'Игнорировать медиа, которые были обработаны после определенной даты и времени',
  admin_button_delete_path: 'Удалить',
  admin_button_rebuildSearchIndex: 'Восстановить поисковый индекс',
  admin_button_rebuildSearchIndex_warning: 'Это перестроит поисковые индексы по всем источникам и может занять очень много времени.',
  admin_info_path_delete: 'Удаление пути...',
  label_editor: 'Редактор?',
  label_noCache: 'сбросить кеш?',
  label_previous_page: 'предыдущая страница результатов',
  label_next_page: 'следующая страница результатов',
  label_results_info: 'показаны результаты с {{ start }} по {{ end }} из {{ total }} всего',
  label_playback_quality: 'Качество воспроизведения',
  label_playback_quality_auto: 'автоматический'
}
