export default {
  id: 'ko',
  emoji: '🇰🇷',
  anonymous_user_name: '신비한',
  welcome_public: '{{ title }} 에 오신 것을 환영합니다!',
  welcome_user: '{{ title }} , {{user.firstName || user.email.includes("@") ? user.email.substring(0, user.email.indexOf("@")) : user.email}} 에 오신 것을 환영합니다!',
  title_login: '로그인',
  title_register: '가입하기',
  title_verifying: '계정 확인 중...',
  title_requestPasswordReset: '암호를 재설정',
  title_resetPassword: '새 비밀번호 설정',
  title_verifying_ended: '인증 종료',
  title_profile: '계정 정보',
  button_profile: '내 계정',
  button_update: '저장',
  info_profile_update: '귀하의 계정 정보가 성공적으로 업데이트되었습니다',
  button_reset_password: '암호를 재설정',
  button_delete_my_account: '내 계정 삭제(취소할 수 없음)',
  label_confirm_user_delete: '계정 삭제를 확인합니다. 이 작업은 되돌릴 수 없습니다!',
  label_email: '이메일',
  label_username: '사용자 이름',
  label_usernameOrEmail: '아이디 또는 이메일',
  label_firstName: '이름',
  label_lastName: '성',
  label_name: '이름',
  label_password: '비밀번호',
  label_newPassword: '새 비밀번호',
  label_locale: '언어',
  label_token: '인증 토큰',
  label_ctime: '만들어진',
  label_mtime: '수정됨',
  button_login: '로그인',
  button_logout: '로그아웃',
  button_register: '가입하기',
  button_forgot_password: '비밀번호를 잊어 버렸습니까?',
  button_send_password_reset_email: '보내다',
  button_set_new_password: '암호를 설정하세요',
  info_password_reset_email_sent: '이메일 메시지가 {{ email }} (으)로 전송되었습니다. 받은 편지함에서 비밀번호 재설정 링크를 확인하세요.',
  info_password_reset_email_error: '오류가 발생하여 메시지가 전송되지 않았을 수 있습니다. 나중에 다시 시도 해주십시오',
  info_password_reset_try_again: '다시 시도하십시오',
  info_verify_token_error: '인증 토큰이 만료되었거나 유효하지 않습니다.',
  info_registration_not_allowed: '{{ title }} 의 운영자가 계정 생성을 비활성화했습니다.',
  button_invite_friends: '친구를 {{ title }} 에 초대하세요!',
  label_friend_emails: '쉼표 또는 공백으로 구분된 이메일 목록',
  button_send_invitations: '초대장 보내기',
  info_invite_friends_header: '친구를 {{ title }} 에 초대하세요!',
  info_invite_friends_subheader: '여기에 이메일 주소를 입력하시면 초대장을 보내드리겠습니다.',
  info_invite_friends_limited_registration: '{{ title }} 의 운영자는 특정인만 등록할 수 있습니다. 초대를 보낼 수 있지만 이러한 사용자는 성공적으로 계정을 만들 수 있으려면 사이트 관리자가 승인한 사용자 목록도 추가해야 합니다.',
  info_invite_friends_disabled_no_email: '이메일이 {{ title }} 에 구성되지 않았기 때문에 &quot;친구 초대&quot; 기능이 비활성화되었습니다.',
  info_invite_friends_enabled_no_email: '&quot;친구 초대&quot; 기능이 활성화되어 있지만 이메일이 {{ title }} 에 구성되어 있지 않아 사용할 수 없습니다.',
  info_invitation_success_results: '귀하의 초대장이 {{ successCount }} 친구에게 성공적으로 전송되었습니다.',
  info_invitation_error_results: '귀하의 초대장을 {{ errorCount }} 친구에게 전달할 수 없습니다.',
  label_search: '검색',
  button_search: '검색',
  label_sort: '정렬 기준',
  label_sort_order: '주문하다',
  label_sort_ascending: '오름차순',
  label_sort_descending: '내림차순',
  title_browsing_folder: '폴더: {{ folder }}',
  button_back_to: '{{ prefix }} 로 돌아가기',
  button_back_to_root_folder: '최상위 레벨로 돌아가기',
  info_search_no_results: '여기에 뭔가가 있어야 할 이유가 사백 사백 가지 있지만 여기에는 아무 것도 없습니다.',
  label_media_unprocessed: '(미처리)',
  button_show_media_info: '미디어 정보 표시',
  button_hide_media_info: '미디어 정보 숨기기',
  button_show_thumbnails: '미리보기 이미지 표시',
  button_hide_thumbnails: '축소판 숨기기',
  button_previous_thumbnail: '이전',
  button_next_thumbnail: '다음',
  thumbnail_alt_text: '{{ name }} 의 썸네일 이미지',
  label_selected_thumbnail: '~ 선택 ~',
  button_select_thumbnail: '이 축소판을 선택하십시오',
  info_no_thumbnails_found: '(썸네일을 찾을 수 없음)',
  button_show_metadata: '메타데이터 표시',
  button_hide_metadata: '메타데이터 숨기기',
  error_field_required: '{{ field }} 이(가) 필요합니다',
  error_field_invalid: '{{ field }} 은(는) 유효하지 않습니다',
  error_field_regex: '{{ field }} 은(는) 유효하지 않습니다',
  error_field_min: '{{ field }} 은(는) 너무 짧습니다.',
  error_field_max: '{{ field }} 이(가) 너무 깁니다.',
  error_field_min_value: '{{ field }} 은(는) 너무 작습니다.',
  error_field_max_value: '{{ field }} 이(가) 너무 큽니다.',
  error_field_email: '{{ field }} 은(는) 유효한 이메일 주소가 아닙니다.',
  error_field_cannotDeleteSelf: '자신을 삭제할 수 없습니다.',
  error_field_alreadyExists: '{{ thing }} 이(가) {{ field.toLowerCase() }} 이(가) 이미 존재합니다.',
  error_field_readOnly: '{{ field }} 은(는) 읽기 전용입니다.',
  error_field_accountNotFound: '계정을 찾을 수 없거나 비밀번호가 올바르지 않습니다.',
  error_field_alreadyRegistered: '이 {{ field.toLowerCase() }} 계정이 이미 존재합니다.',
  error_field_registrationNotAllowed: '사이트 운영자가 계정 생성을 비활성화했습니다',
  error_field_url: '{{ field }} 은(는) 유효한 URL이 아닙니다.',
  error_field_host: '{{ field }} 은(는) 유효한 호스트 이름이 아닙니다.',
  error_field_locale: '{{ field }} 은(는) 유효한 로캘이 아닙니다.',
  error_field_source: '{{ field }} 은(는) 소스 이름이 아닙니다. 문자, 숫자 및 마침표(.), 하이픈(-) 및 밑줄(_)과 같은 특수 문자만 사용하십시오.',
  error_field_notFound: '{{ field }} 을(를) 찾을 수 없습니다',
  error_field_path: '{{ field }} 은(는) 유효한 경로가 아닙니다.',
  error_field_cannotMirrorToSame: '읽기 소스와 쓰기 소스는 동일한 소스일 수 없습니다.',
  error_field_raw_hex: '{{ field }} 는 16진수가 아닙니다(앞에 0x는 허용되지 않음).',
  error_field_hex: '{{ field }} 는 16진수가 아닙니다.',
  error_field_username: '{{ field }} 은(는) 유효한 사용자 이름이 아닙니다. 문자로 시작하고 문자, 숫자, 밑줄(_), 하이픈(-) 및 점(.)만 포함해야 합니다.',
  locale_en: '영어',
  locale_es: '스페인의',
  locale_it: '이탈리아 사람',
  locale_fr: '프랑스 국민',
  locale_de: '독일 사람',
  locale_ar: '아라비아 말',
  locale_bn: '벵골 사람',
  locale_hi: '힌디 어',
  locale_id: '인도네시아 인',
  locale_ja: '일본어',
  locale_ko: '한국인',
  locale_pl: '광택',
  locale_pt: '포르투갈 인',
  locale_ru: '러시아인',
  locale_ur: '우르두어',
  locale_sw: '스와힐리어',
  locale_tl: '타갈로그어',
  locale_vi: '베트남어',
  locale_zh: '중국인',
  label_date: '{{MMM}} {{d}} , {{YYYY}}',
  label_date_short: '{{M}} / {{d}} / {{YYYY}}',
  label_date_and_time: '{{MMM}} {{d}} , {{YYYY}} / {{h}} : {{m}} {{a}}',
  label_date_and_time_short: '{{M}} / {{d}} / {{YYYY}} {{h}} : {{m}} {{a}}',
  label_date_undefined: '날짜/시간이 설정되지 않음',
  label_date_day_half_am: '오전',
  label_date_day_half_pm: '오후',
  label_date_day_0: '일요일',
  label_date_day_1: '월요일',
  label_date_day_2: '화요일',
  label_date_day_3: '수요일',
  label_date_day_4: '목요일',
  label_date_day_5: '금요일',
  label_date_day_6: '토요일',
  label_date_day_short_0: '해',
  label_date_day_short_1: '월',
  label_date_day_short_2: '화요일',
  label_date_day_short_3: '수',
  label_date_day_short_4: '목',
  label_date_day_short_5: '금',
  label_date_day_short_6: '수능',
  label_date_month_0: '1월',
  label_date_month_1: '2월',
  label_date_month_2: '3월',
  label_date_month_3: '4월',
  label_date_month_4: '5월',
  label_date_month_5: '6월',
  label_date_month_6: '칠월',
  label_date_month_7: '팔월',
  label_date_month_8: '구월',
  label_date_month_9: '십월',
  label_date_month_10: '십일월',
  label_date_month_11: '12월',
  label_date_month_short_0: '1월',
  label_date_month_short_1: '2월',
  label_date_month_short_2: '망치다',
  label_date_month_short_3: '4월',
  label_date_month_short_4: '5월',
  label_date_month_short_5: '준',
  label_date_month_short_6: '7월',
  label_date_month_short_7: '8월',
  label_date_month_short_8: '9월',
  label_date_month_short_9: '10월',
  label_date_month_short_10: '11월',
  label_date_month_short_11: '12월',
  label_date_month_number_0: '1',
  label_date_month_number_1: '2',
  label_date_month_number_2: '삼',
  label_date_month_number_3: '삼',
  label_date_month_number_4: '5',
  label_date_month_number_5: '6',
  label_date_month_number_6: '7',
  label_date_month_number_7: '8',
  label_date_month_number_8: '9',
  label_date_month_number_9: '10',
  label_date_month_number_10: '11',
  label_date_month_number_11: '12',
  label_duration_days: '날',
  label_duration_hours: '시간',
  label_duration_minutes: '분',
  label_duration_seconds: '초',
  hint_readonly: '(읽기 전용)',
  label_mediainfo_title: '제목',
  label_mediainfo_artist: '아티스트',
  label_mediainfo_album_artist: '앨범 아티스트',
  label_mediainfo_author: '작가',
  label_mediainfo_composer: '작곡가',
  label_mediainfo_year: '년도',
  label_mediainfo_copyright: '저작권',
  label_mediainfo_album: '앨범',
  label_mediainfo_movie: '영화',
  label_mediainfo_description: '설명',
  label_mediainfo_comment: '논평',
  label_mediainfo_genre: '장르',
  label_mediainfo_location: '위치',
  label_mediainfo_show: '보여 주다',
  label_mediainfo_episode: '삽화',
  label_mediainfo_episode_sort: '에피소드(정렬)',
  label_mediainfo_season: '계절',
  label_mediainfo_lyrics: '가사',
  label_mediainfo_tags: '태그',
  label_mediainfo_duration: '지속',
  label_mediainfo_width: '너비',
  label_mediainfo_height: '키',
  label_mediainfo_size: '크기',
  label_mediainfo_videoTracks: '비디오 트랙',
  label_mediainfo_audioTracks: '오디오 트랙',
  label_mediainfo_format: '체재',
  label_mediainfo_contentType: '컨텐츠 타입',
  label_mediainfo_bitRate: '비트 전송률',
  label_mediainfo_frameRate: '프레임 속도',
  label_mediainfo_dateEncoded: '인코딩된 날짜',
  button_admin: '사이트 구성',
  admin_title_site_administration: '{{ title }} 관리',
  admin_title_manage_configuration: '시스템 설정',
  admin_title_source_administration: '소스 관리',
  admin_title_user_administration: '사용자 관리',
  admin_title_migrate_data: '데이터 마이그레이션',
  admin_title_transform_queue: '미디어 변환 대기열',
  admin_title_site_administration_publicConfig: '공개 구성',
  admin_title_site_administration_privateConfig: '개인 구성',
  admin_button_save_config: '구하다',
  admin_info_config_updated: '시스템 구성이 성공적으로 업데이트되었습니다.',
  admin_label_publicConfig_title: '사이트 제목',
  admin_label_publicConfig_siteUrl: '사이트 URL',
  admin_label_publicConfig_public: '공공의?',
  admin_label_publicConfig_allowRegistration: '등록을 허용하시겠습니까?',
  admin_label_publicConfig_limitRegistration: '등록 제한',
  admin_label_publicConfig_inviteFriendsEnabled: '로그인한 사용자에게 &#39;친구 초대&#39;를 표시하시겠습니까?',
  admin_label_publicConfig_locales: '로케일',
  admin_label_publicConfig_defaultLocale: '기본 로케일',
  admin_label_publicConfig_emailEnabled: '이메일이 활성화되었습니까?',
  admin_label_publicConfig_timeout: '시간 초과',
  admin_label_publicConfig_timeout_verify: '계정 확인 토큰 시간 초과',
  admin_label_publicConfig_timeout_resetPassword: '비밀번호 토큰 시간 초과 재설정',
  admin_label_privateConfig_admin: '관리자 설정',
  admin_label_privateConfig_admin_user: '관리자 사용자',
  admin_label_privateConfig_admin_user_email: '이메일',
  admin_label_privateConfig_admin_user_username: '사용자 이름',
  admin_label_privateConfig_admin_user_password: '비밀번호',
  admin_label_privateConfig_admin_user_firstName: '이름',
  admin_label_privateConfig_admin_user_lastName: '성',
  admin_label_privateConfig_admin_user_locale: '장소',
  admin_label_privateConfig_admin_overwrite: '덮어쓰시겠습니까?',
  admin_label_privateConfig_email: 'SMTP 설정',
  admin_label_privateConfig_email_host: '주최자',
  admin_label_privateConfig_email_port: '포트',
  admin_label_privateConfig_email_user: '사용자 이름',
  admin_label_privateConfig_email_password: '비밀번호',
  admin_label_privateConfig_email_secure: '안전한?',
  admin_label_privateConfig_email_fromEmail: '시스템 이메일 주소',
  admin_label_privateConfig_redis: '레디스 설정',
  admin_label_privateConfig_redis_host: '주최자',
  admin_label_privateConfig_redis_port: '포트',
  admin_label_privateConfig_redis_flushAtStartup: '시작 시 플러시?',
  admin_label_privateConfig_redis_listingCacheExpiration: '캐시 만료 나열',
  admin_label_privateConfig_redis_manifestCacheExpiration: '매니페스트 캐시 만료',
  admin_label_privateConfig_media: '미디어 지원',
  admin_label_privateConfig_media_video: '동영상',
  admin_label_privateConfig_media_video_allowedCommands: '허용된 명령',
  admin_label_privateConfig_encryption: '암호화 설정',
  admin_label_privateConfig_encryption_key: '암호화 키',
  admin_label_privateConfig_encryption_iv: '초기화 벡터(IV)',
  admin_label_privateConfig_encryption_algo: '연산',
  admin_label_privateConfig_encryption_bcryptRounds: 'Bcrypt 라운드',
  admin_label_privateConfig_session: '세션 설정',
  admin_label_privateConfig_session_expiration: '세션 타임 아웃',
  admin_label_privateConfig_autoscan: '자동 스캔 설정',
  admin_label_privateConfig_autoscan_enabled: '자동 스캔 사용',
  admin_label_privateConfig_autoscan_interval: '정기 스캔 간격',
  admin_label_privateConfig_autoscan_initialDelay: '시작 스캔 지연',
  admin_label_privateConfig_autoscan_showTransformOutput: '로그 변환 출력?',
  admin_label_privateConfig_autoscan_cleanupTemporaryAssets: '임시 파일을 정리하시겠습니까?',
  admin_label_privateConfig_autoscan_deleteIncompleteUploads: '불완전한 업로드를 정리하시겠습니까?',
  admin_label_privateConfig_autoscan_concurrency: '동시성',
  admin_label_total_user_count: '{{ totalUserCount }} 총 사용자',
  admin_button_delete_user: '사용자 삭제',
  admin_label_confirm_user_delete: '사용자 삭제를 확인하십시오: {{ email }}',
  label_configCategory: '구성 범주',
  admin_button_add_source: '소스 추가',
  admin_title_add_source: '소스 추가',
  admin_button_delete_source: '소스 삭제',
  admin_button_scan_source: '주사',
  admin_info_scan_scanning: '스캐닝...',
  admin_info_scan_successful: '스캔이 성공적으로 시작되었습니다',
  admin_info_scan_error: '스캔하는 동안 오류가 발생했습니다.',
  admin_label_confirm_source_delete: '출처 삭제를 확인하십시오: {{ source }}',
  admin_info_source_added: '새 소스 &#39; {{ source }} &#39;이(가) 성공적으로 추가되었습니다.',
  admin_info_source_add_error: '소스 &#39; {{ source }} &#39;을(를) 추가하는 동안 오류가 발생했습니다.',
  admin_label_source_name: '소스 이름',
  admin_label_self_source: '{{ title }} 저장',
  admin_label_source_type: '소스 유형',
  admin_label_source_readOnly: '읽기 전용?',
  admin_label_source_cacheSize: '캐시 크기 나열(비활성화하려면 0)',
  admin_label_source_encryption_enable: '암호화 활성화',
  admin_label_source_encryption_key: '암호화 키',
  admin_label_source_encryption_iv: '초기화 벡터(IV)',
  admin_label_source_encryption_algo: '연산',
  label_sourceType_local: '로컬 파일 시스템',
  label_sourceType_local_field_baseDir: '마운트 디렉토리',
  label_sourceType_local_field_mode: '파일/디렉토리 생성 모드',
  label_sourceType_s3: '아마존 S3',
  label_sourceType_s3_field_key: 'AWS 액세스 키',
  label_sourceType_s3_field_secret: 'AWS 비밀 키',
  label_sourceType_s3_field_bucket: 'S3 버킷',
  label_sourceType_s3_field_region: 'AWS 리전',
  label_sourceType_s3_field_prefix: '버킷 접두사',
  label_sourceType_s3_field_delimiter: '구분자',
  label_sourceType_b2: '백블레이즈 B2',
  label_sourceType_b2_field_key: '키 ID',
  label_sourceType_b2_field_secret: '애플리케이션 키',
  label_sourceType_b2_field_bucket: 'B2 버킷 ID(이름 아님)',
  label_sourceType_b2_field_partSize: '부품 크기',
  label_sourceType_b2_field_prefix: '버킷 접두사',
  label_sourceType_b2_field_delimiter: '구분자',
  admin_label_firstEvent: '첫 번째 이벤트',
  admin_label_lastEvent: '마지막 이벤트',
  admin_label_eventTime: '시각',
  admin_label_eventName: '이벤트',
  admin_label_eventDescription: '설명',
  admin_label_xformQueueEmpty: '활성 작업 없음',
  admin_label_migration_noSources: '정의된 소스 없음',
  admin_label_migration_results: '마이그레이션 결과:',
  admin_label_migration_readSource: '데이터를 마이그레이션할 소스',
  admin_label_migration_readPath: '경로에서 읽기(파일 시스템 루트의 경우 공백)',
  admin_label_readSource: '소스 읽기',
  admin_label_readPath: '경로 읽기',
  admin_label_migration_writeSource: '데이터를 쓸 소스',
  admin_label_migration_writePath: '경로에 쓰기(파일 시스템 루트의 경우 공백)',
  admin_label_writeSource: '소스 쓰기',
  admin_label_writePath: '쓰기 경로',
  admin_button_migrate_data: '데이터 마이그레이션',
  admin_info_migration_success: '데이터가 성공적으로 마이그레이션되었습니다.',
  admin_info_migration_error: '데이터를 이전하는 동안 오류가 발생했습니다.',
  http_invalid_request_method: 'HTTP 요청 방법 {{ method }} 은(는) 이 끝점에서 지원되지 않습니다.',
  locale_ha: '하우사',
  locale_mr: '마란티',
  locale_tr: '터키어',
  info_search_searching: '...',
  search_stop_words: 'a,약,위,후,다시,반대,모두,am,an,and,any,are,arn\'t 에 의해, 할 수 없다, 할 수 없다, 할 수 없다, 할 수 없다, 했다, 하지 않았다, 하다, 한다, 하지 않는다, 한다, 하다 없었다,있다,하지 않았다,있다,그,그는,그는,그는,그녀,여기,여기,그녀,자신,그,자신,그의,어떻게,어떻게, 나는, 나는, 나는, 나는, 나는, 나는, 나는, 만약, 에, ~에, ~이다, ~이다, 그 자체, ~하자, 나, 더, 대부분, ~하면 안 된다, 내,나,아니,도,아니,의,꺼짐,켜기,한번만,또는,다른,당위,우리,우리 자신,밖,이상,자신,같은,안되지,그녀,그녀는,그녀 그녀는,해야,하지,그래,일부,이,보다,그,저,그,그들의,그들의,그들,자신,그때,거기 ,그들은,그들은,이,저것,통해,까지,너무,아래,까지,위,uct,utc,매우,이었다,아니었다,우리,우리는,우리는,우리는 ,우리는,무엇이,언제,언제,어디,어디,무엇,동안,누가,누가,누구,왜,왜,함께,하지 않을,할,하지 않을,당신 ,너,너,너,너,너,너,너,너,너',
  label_header_comments: '코멘트',
  label_header_no_comments: '할말있나요?',
  label_comment: '코멘트를 추가하다!',
  label_comment_modified: '편집',
  label_updating_comment: '업데이트 중...',
  label_removing_comment: '풀이...',
  button_add_comment: '댓글 추가',
  button_update_comment: '댓글 업데이트',
  admin_title_index_administration: '인덱스 관리',
  admin_button_reindex_source: '색인 재지정',
  admin_info_reindex_indexing: '인덱싱...',
  admin_info_reindex_error: '색인을 다시 생성하는 동안 오류가 발생했습니다. {{ e }}',
  admin_info_reindex_successful: '재인덱싱이 성공적으로 시작되었습니다.',
  admin_info_reindex_info_error: '재색인화 상태를 읽는 동안 오류가 발생했습니다. {{ e }}',
  admin_label_reindex_path: '소스 및 경로',
  admin_label_reindex_time: '시간',
  admin_label_reindex_status: '상태',
  admin_label_reindex_noResults: '재인덱싱 결과를 찾을 수 없습니다.',
  footer_credit: '<a style="text-decoration: none;" href="https://github.com/cobbzilla/yuebing">🥮 Yuebing 제공</a>',
  info_search_indexes_building: '이 동일한 검색은 앞으로 더 많은 결과를 반환할 수 있습니다. 일부 검색 색인이 재구축되고 있습니다: {{ indexes }}',
  info_search_no_results_unverified: '검색 결과를 보려면 {{ email }} (으)로 전송된 링크를 사용하여 계정을 확인하십시오.',
  label_metadata: '파일 메타데이터',
  label_mediainfo: '파일 미디어 정보',
  label_add_tag: '태그 추가',
  label_adding_tag: '태그 추가 중...',
  label_removing_tag: '태그 제거 중...',
  label_scan_ignoreErrors: '이전 오류 무시',
  label_scan_overwrite: '기존 파일 덮어쓰기',
  label_scan_reprocess: '재처리',
  label_scan_reprocess_profiles: '이 프로필 재처리',
  label_path: '길',
  label_select_all: '모두 선택',
  locale_text_list_separator: ',',
  admin_title_source_browser: '소스 찾아보기',
  admin_title_reindex_status: '인덱싱 상태',
  admin_button_browse_source: '검색',
  admin_label_scan_config: '스캔 구성: {{ source }}',
  admin_label_scan_olderThan: '특정 날짜 및 시간 이후에 처리된 미디어 무시',
  admin_button_delete_path: '삭제',
  admin_button_rebuildSearchIndex: '검색 색인 다시 작성',
  admin_button_rebuildSearchIndex_warning: '이렇게 하면 모든 소스에서 검색 인덱스를 다시 작성하고 시간이 매우 오래 걸릴 수 있습니다.',
  admin_info_path_delete: '경로 삭제 중...'
}
