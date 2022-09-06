export default {
  id: 'vi',
  emoji: '🇻🇳',
  anonymous_user_name: 'bí ẩn',
  welcome_public: 'Chào mừng đến với {{ title }} !',
  welcome_user: 'Chào mừng bạn đến với {{ title }} , {{user.firstName || user.email.includes("@") ? user.email.substring(0, user.email.indexOf("@")) : user.email}} !',
  title_login: 'Đăng nhập',
  title_register: 'Đăng ký',
  title_verifying: 'Đang xác minh tài khoản ...',
  title_requestPasswordReset: 'Đặt lại mật khẩu',
  title_resetPassword: 'Đặt mật khẩu mới',
  title_verifying_ended: 'Quá trình xác minh đã kết thúc',
  title_profile: 'thông tin tài khoản',
  button_profile: 'Tài khoản của tôi',
  button_update: 'tiết kiệm',
  info_profile_update: 'Thông tin tài khoản của bạn đã được cập nhật thành công',
  button_reset_password: 'Đặt lại mật khẩu',
  button_delete_my_account: 'Xóa tài khoản của tôi (KHÔNG THỂ HOÀN TÁC)',
  label_confirm_user_delete: 'Xác nhận xóa tài khoản của bạn. Hành động này là không thể thay đổi!',
  label_email: 'E-mail',
  label_username: 'tên tài khoản',
  label_usernameOrEmail: 'Tên người dùng hoặc email',
  label_firstName: 'Họ',
  label_lastName: 'Họ',
  label_name: 'Tên',
  label_password: 'Mật khẩu',
  label_newPassword: 'Mật khẩu mới',
  label_locale: 'Ngôn ngữ',
  label_token: 'Mã thông báo xác minh',
  label_ctime: 'Tạo',
  label_mtime: 'Đã sửa đổi',
  button_login: 'Đăng nhập',
  button_logout: 'Đăng xuất',
  button_register: 'Đăng ký',
  button_forgot_password: 'Quên mật khẩu?',
  button_send_password_reset_email: 'Gửi',
  button_set_new_password: 'Đặt mật khẩu',
  info_password_reset_email_sent: 'Một email đã được gửi đến {{ email }} , hãy kiểm tra hộp thư đến của bạn để biết liên kết đặt lại mật khẩu của bạn',
  info_password_reset_email_error: 'Đã xảy ra lỗi và tin nhắn của bạn có thể chưa được gửi đi. Vui lòng thử lại sau',
  info_password_reset_try_again: 'Thử lại',
  info_verify_token_error: 'Mã thông báo xác minh đã hết hạn hoặc không hợp lệ',
  info_registration_not_allowed: 'Nhà điều hành của {{ title }} đã vô hiệu hóa việc tạo tài khoản',
  button_invite_friends: 'Mời bạn bè của bạn vào {{ title }} !',
  label_friend_emails: 'Danh sách các email được phân tách bằng dấu phẩy hoặc dấu cách',
  button_send_invitations: 'Gửi những lời mời',
  info_invite_friends_header: 'Mời bạn bè của bạn vào {{ title }} !',
  info_invite_friends_subheader: 'Nhập một số địa chỉ email ở đây và chúng tôi sẽ gửi cho họ lời mời',
  info_invite_friends_limited_registration: 'Nhà điều hành của {{ title }} đã giới hạn đăng ký cho những người cụ thể. Bạn có thể gửi lời mời, nhưng những người dùng này cũng phải được quản trị viên trang web thêm vào danh sách người dùng được chấp thuận trước khi họ có thể tạo tài khoản thành công',
  info_invite_friends_disabled_no_email: 'Tính năng &quot;mời bạn bè&quot; bị tắt vì email chưa được định cấu hình vào {{ title }}',
  info_invite_friends_enabled_no_email: 'Tính năng &quot;mời bạn bè&quot; đã được bật nhưng email chưa được định cấu hình vào {{ title }} nên không thể sử dụng được',
  info_invitation_success_results: 'Lời mời của bạn đã được gửi thành công tới {{ successCount }} bạn bè',
  info_invitation_error_results: 'Không thể gửi lời mời của bạn đến {{ errorCount }} bạn bè',
  label_search: 'Tìm kiếm',
  button_search: 'Tìm kiếm',
  label_sort: 'Sắp xếp theo',
  label_sort_order: 'Gọi món',
  label_sort_ascending: 'tăng dần',
  label_sort_descending: 'giảm dần',
  title_browsing_folder: 'Thư mục: {{ folder }}',
  button_back_to: 'Quay lại {{ prefix }}',
  button_back_to_root_folder: 'Quay lại cấp cao nhất',
  info_search_no_results: 'Có bốn trăm lẻ bốn lý do mà thứ gì đó nên ở đây, nhưng không có gì ở đây',
  label_media_unprocessed: '(chưa qua xử lý)',
  button_show_media_info: 'hiển thị thông tin phương tiện',
  button_hide_media_info: 'ẩn thông tin phương tiện',
  button_show_thumbnails: 'hiển thị hình thu nhỏ',
  button_hide_thumbnails: 'ẩn hình thu nhỏ',
  button_previous_thumbnail: 'Trước',
  button_next_thumbnail: 'tiếp theo',
  thumbnail_alt_text: 'hình ảnh thu nhỏ cho {{ name }}',
  label_selected_thumbnail: '~ đã chọn ~',
  button_select_thumbnail: 'chọn hình thu nhỏ này',
  info_no_thumbnails_found: '(không tìm thấy hình thu nhỏ)',
  button_show_metadata: 'hiển thị siêu dữ liệu',
  button_hide_metadata: 'ẩn siêu dữ liệu',
  error_field_required: '{{ field }} là bắt buộc',
  error_field_invalid: '{{ field }} không hợp lệ',
  error_field_regex: '{{ field }} không hợp lệ',
  error_field_min: '{{ field }} quá ngắn',
  error_field_max: '{{ field }} quá dài',
  error_field_min_value: '{{ field }} quá nhỏ',
  error_field_max_value: '{{ field }} quá lớn',
  error_field_email: '{{ field }} không phải là một địa chỉ email hợp lệ',
  error_field_cannotDeleteSelf: 'Bạn không thể xóa chính mình',
  error_field_alreadyExists: '{{ thing }} với {{ field.toLowerCase() }} đã tồn tại',
  error_field_readOnly: '{{ field }} ở chế độ chỉ đọc',
  error_field_accountNotFound: 'Không tìm thấy tài khoản hoặc mật khẩu không chính xác',
  error_field_alreadyRegistered: 'Tài khoản với {{ field.toLowerCase() }} này đã tồn tại',
  error_field_registrationNotAllowed: 'Nhà điều hành trang web đã vô hiệu hóa việc tạo tài khoản',
  error_field_url: '{{ field }} không phải là một URL hợp lệ',
  error_field_host: '{{ field }} không phải là tên máy chủ hợp lệ',
  error_field_locale: '{{ field }} không phải là ngôn ngữ hợp lệ',
  error_field_source: '{{ field }} không phải là tên nguồn. Chỉ sử dụng các chữ cái, số và các ký tự đặc biệt sau: dấu chấm (.), Dấu gạch ngang (-) và dấu gạch dưới (_)',
  error_field_notFound: '{{ field }} không thể được định vị',
  error_field_path: '{{ field }} không phải là một đường dẫn hợp lệ',
  error_field_cannotMirrorToSame: 'Nguồn đọc và nguồn ghi không được cùng một nguồn',
  error_field_raw_hex: '{{ field }} không phải là số thập lục phân (không cho phép số 0 ở đầu)',
  error_field_hex: '{{ field }} không phải là số thập lục phân',
  error_field_username: '{{ field }} không phải là tên người dùng hợp lệ. Phải bắt đầu bằng một chữ cái và chỉ chứa các chữ cái, số, dấu gạch dưới (_), dấu gạch ngang (-) và dấu chấm (.)',
  locale_en: 'Tiếng Anh',
  locale_es: 'người Tây Ban Nha',
  locale_it: 'người Ý',
  locale_fr: 'người Pháp',
  locale_de: 'tiếng Đức',
  locale_ar: 'tiếng Ả Rập',
  locale_bn: 'Tiếng Bengali',
  locale_hi: 'Tiếng Hindi',
  locale_id: 'Người Indonesia',
  locale_ja: 'tiếng Nhật',
  locale_ko: 'Hàn Quốc',
  locale_pl: 'Đánh bóng',
  locale_pt: 'Người Bồ Đào Nha',
  locale_ru: 'tiếng Nga',
  locale_ur: 'Tiếng Urdu',
  locale_sw: 'Tiếng Swahili',
  locale_tl: 'Tagalog',
  locale_vi: 'Tiếng Việt',
  locale_zh: 'người Trung Quốc',
  label_date: '{{MMM}} {{d}} , {{YYYY}}',
  label_date_short: '{{M}} / {{d}} / {{YYYY}}',
  label_date_and_time: '{{MMM}} {{d}} , {{YYYY}} / {{h}} : {{m}} {{a}}',
  label_date_and_time_short: '{{M}} / {{d}} / {{YYYY}} {{h}} : {{m}} {{a}}',
  label_date_undefined: 'Ngày / giờ không được đặt',
  label_date_day_half_am: 'sáng',
  label_date_day_half_pm: 'BUỔI CHIỀU',
  label_date_day_0: 'Chủ nhật',
  label_date_day_1: 'Thứ hai',
  label_date_day_2: 'Thứ ba',
  label_date_day_3: 'Thứ Tư',
  label_date_day_4: 'thứ năm',
  label_date_day_5: 'Thứ sáu',
  label_date_day_6: 'Thứ bảy',
  label_date_day_short_0: 'Mặt trời',
  label_date_day_short_1: 'Thứ hai',
  label_date_day_short_2: 'Thứ ba',
  label_date_day_short_3: 'Thứ Tư',
  label_date_day_short_4: 'Thu',
  label_date_day_short_5: 'T6',
  label_date_day_short_6: 'Đã ngồi',
  label_date_month_0: 'tháng Giêng',
  label_date_month_1: 'tháng 2',
  label_date_month_2: 'Bước đều',
  label_date_month_3: 'Tháng tư',
  label_date_month_4: 'Có thể',
  label_date_month_5: 'Tháng sáu',
  label_date_month_6: 'Tháng bảy',
  label_date_month_7: 'Tháng tám',
  label_date_month_8: 'Tháng 9',
  label_date_month_9: 'Tháng Mười',
  label_date_month_10: 'Tháng mười một',
  label_date_month_11: 'Tháng 12',
  label_date_month_short_0: 'Tháng một',
  label_date_month_short_1: 'Tháng Hai',
  label_date_month_short_2: 'Mar',
  label_date_month_short_3: 'Tháng tư',
  label_date_month_short_4: 'Có thể',
  label_date_month_short_5: 'Tháng sáu',
  label_date_month_short_6: 'Thg 7',
  label_date_month_short_7: 'Tháng 8',
  label_date_month_short_8: 'Tháng chín',
  label_date_month_short_9: 'Tháng 10',
  label_date_month_short_10: 'Tháng mười một',
  label_date_month_short_11: 'Tháng mười hai',
  label_date_month_number_0: '1',
  label_date_month_number_1: '2',
  label_date_month_number_2: '3',
  label_date_month_number_3: '3',
  label_date_month_number_4: '5',
  label_date_month_number_5: '6',
  label_date_month_number_6: '7',
  label_date_month_number_7: 'số 8',
  label_date_month_number_8: '9',
  label_date_month_number_9: '10',
  label_date_month_number_10: '11',
  label_date_month_number_11: '12',
  label_duration_days: 'ngày',
  label_duration_hours: 'giờ',
  label_duration_minutes: 'phút',
  label_duration_seconds: 'giây',
  hint_readonly: '(chỉ đọc)',
  label_mediainfo_title: 'Tiêu đề',
  label_mediainfo_artist: 'Họa sĩ',
  label_mediainfo_album_artist: 'Album Nghệ sĩ',
  label_mediainfo_author: 'Tác giả',
  label_mediainfo_composer: 'Người soạn nhạc',
  label_mediainfo_year: 'Năm',
  label_mediainfo_copyright: 'Bản quyền',
  label_mediainfo_album: 'Album',
  label_mediainfo_movie: 'Bộ phim',
  label_mediainfo_description: 'Sự mô tả',
  label_mediainfo_comment: 'Bình luận',
  label_mediainfo_genre: 'Thể loại',
  label_mediainfo_location: 'Địa điểm',
  label_mediainfo_show: 'Trình diễn',
  label_mediainfo_episode: 'Tập phim',
  label_mediainfo_episode_sort: 'Tập (sắp xếp)',
  label_mediainfo_season: 'Mùa',
  label_mediainfo_lyrics: 'Lời bài hát',
  label_mediainfo_tags: 'Thẻ',
  label_mediainfo_duration: 'Khoảng thời gian',
  label_mediainfo_width: 'Bề rộng',
  label_mediainfo_height: 'Chiều cao',
  label_mediainfo_size: 'Kích thước',
  label_mediainfo_videoTracks: 'Bản nhạc video',
  label_mediainfo_audioTracks: 'Bản nhạc âm thanh',
  label_mediainfo_format: 'Định dạng',
  label_mediainfo_contentType: 'Loại nội dung',
  label_mediainfo_bitRate: 'Tốc độ bit',
  label_mediainfo_frameRate: 'Tỷ lệ khung hình',
  label_mediainfo_dateEncoded: 'Ngày được mã hóa',
  button_admin: 'Cấu hình trang web',
  admin_title_site_administration: '{{ title }} Quản trị',
  admin_title_manage_configuration: 'Cấu hình hệ thông',
  admin_title_source_administration: 'Quản trị nguồn',
  admin_title_user_administration: 'Quản lý người dùng',
  admin_title_migrate_data: 'Di chuyển dữ liệu',
  admin_title_transform_queue: 'Hàng đợi chuyển đổi phương tiện',
  admin_title_site_administration_publicConfig: 'Cấu hình công khai',
  admin_title_site_administration_privateConfig: 'Cấu hình riêng tư',
  admin_button_save_config: 'Tiết kiệm',
  admin_info_config_updated: 'Đã cập nhật thành công cấu hình hệ thống',
  admin_label_publicConfig_title: 'Tiêu đề trang web',
  admin_label_publicConfig_siteUrl: 'URL trang web',
  admin_label_publicConfig_public: 'Công cộng?',
  admin_label_publicConfig_allowRegistration: 'Cho phép đăng ký?',
  admin_label_publicConfig_limitRegistration: 'Đăng ký giới hạn',
  admin_label_publicConfig_inviteFriendsEnabled: 'Hiển thị &#39;Mời bạn bè&#39; cho người dùng đã đăng nhập?',
  admin_label_publicConfig_locales: 'Miền địa phương',
  admin_label_publicConfig_defaultLocale: 'Ngôn ngữ mặc định',
  admin_label_publicConfig_emailEnabled: 'Email được bật?',
  admin_label_publicConfig_timeout: 'Hết giờ',
  admin_label_publicConfig_timeout_verify: 'Hết thời gian chờ mã thông báo xác minh tài khoản',
  admin_label_publicConfig_timeout_resetPassword: 'Đặt lại thời gian chờ mã thông báo mật khẩu',
  admin_label_privateConfig_admin: 'Cài đặt quản trị viên',
  admin_label_privateConfig_admin_user: 'Người dùng quản trị',
  admin_label_privateConfig_admin_user_email: 'E-mail',
  admin_label_privateConfig_admin_user_username: 'tên tài khoản',
  admin_label_privateConfig_admin_user_password: 'Mật khẩu',
  admin_label_privateConfig_admin_user_firstName: 'Họ',
  admin_label_privateConfig_admin_user_lastName: 'Họ',
  admin_label_privateConfig_admin_user_locale: 'Ngôn ngữ',
  admin_label_privateConfig_admin_overwrite: 'Ghi đè?',
  admin_label_privateConfig_email: 'Cài đặt SMTP',
  admin_label_privateConfig_email_host: 'Chủ nhà',
  admin_label_privateConfig_email_port: 'Hải cảng',
  admin_label_privateConfig_email_user: 'tên tài khoản',
  admin_label_privateConfig_email_password: 'Mật khẩu',
  admin_label_privateConfig_email_secure: 'Chắc chắn?',
  admin_label_privateConfig_email_fromEmail: 'Địa chỉ email hệ thống',
  admin_label_privateConfig_redis: 'Cài đặt Redis',
  admin_label_privateConfig_redis_host: 'Chủ nhà',
  admin_label_privateConfig_redis_port: 'Hải cảng',
  admin_label_privateConfig_redis_flushAtStartup: 'Xả khi khởi động?',
  admin_label_privateConfig_redis_listingCacheExpiration: 'Danh sách bộ nhớ cache hết hạn',
  admin_label_privateConfig_redis_manifestCacheExpiration: 'Tệp kê khai hết hạn bộ nhớ cache',
  admin_label_privateConfig_media: 'Hỗ trợ phương tiện',
  admin_label_privateConfig_media_video: 'Video',
  admin_label_privateConfig_media_video_allowedCommands: 'Các lệnh được phép',
  admin_label_privateConfig_encryption: 'Cài đặt mã hóa',
  admin_label_privateConfig_encryption_key: 'Khóa mã hóa',
  admin_label_privateConfig_encryption_iv: 'Véc tơ khởi tạo (IV)',
  admin_label_privateConfig_encryption_algo: 'Thuật toán',
  admin_label_privateConfig_encryption_bcryptRounds: 'Vòng bcrypt',
  admin_label_privateConfig_session: 'Cài đặt phiên',
  admin_label_privateConfig_session_expiration: 'Thời gian chờ của phiên',
  admin_label_privateConfig_autoscan: 'Cài đặt quét tự động',
  admin_label_privateConfig_autoscan_enabled: 'Bật tính năng quét tự động',
  admin_label_privateConfig_autoscan_interval: 'Khoảng thời gian quét thường xuyên',
  admin_label_privateConfig_autoscan_initialDelay: 'Độ trễ quét khởi động',
  admin_label_privateConfig_autoscan_showTransformOutput: 'Đầu ra biến đổi nhật ký?',
  admin_label_privateConfig_autoscan_cleanupTemporaryAssets: 'Dọn dẹp các tệp tạm thời?',
  admin_label_privateConfig_autoscan_deleteIncompleteUploads: 'Xóa các nội dung tải lên chưa hoàn chỉnh?',
  admin_label_privateConfig_autoscan_concurrency: 'Đồng thời',
  admin_label_total_user_count: '{{ totalUserCount }} tổng số người dùng',
  admin_button_delete_user: 'Xóa người dùng',
  admin_label_confirm_user_delete: 'Vui lòng xác nhận việc xóa người dùng: {{ email }}',
  label_configCategory: 'Danh mục cấu hình',
  admin_button_add_source: 'Thêm nguồn',
  admin_title_add_source: 'Thêm nguồn',
  admin_button_delete_source: 'Xóa nguồn',
  admin_button_scan_source: 'Quét',
  admin_info_scan_scanning: 'Đang quét ...',
  admin_info_scan_successful: 'Quá trình quét đã bắt đầu thành công',
  admin_info_scan_error: 'Đã xảy ra lỗi trong quá trình quét',
  admin_label_confirm_source_delete: 'Vui lòng xác nhận xóa nguồn: {{ source }}',
  admin_info_source_added: 'Nguồn mới &#39; {{ source }} &#39; đã được thêm thành công',
  admin_info_source_add_error: 'Đã xảy ra lỗi khi thêm nguồn &#39; {{ source }} &#39;',
  admin_label_source_name: 'Tên nguồn',
  admin_label_self_source: '{{ title }} lưu trữ',
  admin_label_source_type: 'Loại nguồn',
  admin_label_source_readOnly: 'Chỉ đọc?',
  admin_label_source_cacheSize: 'Kích thước bộ đệm danh sách (không để tắt)',
  admin_label_source_encryption_enable: 'Cho phép mã hóa',
  admin_label_source_encryption_key: 'Khóa mã hóa',
  admin_label_source_encryption_iv: 'Véc tơ khởi tạo (IV)',
  admin_label_source_encryption_algo: 'Thuật toán',
  label_sourceType_local: 'Hệ thống tệp cục bộ',
  label_sourceType_local_field_baseDir: 'Gắn kết thư mục',
  label_sourceType_local_field_mode: 'Chế độ tạo tệp / thư mục',
  label_sourceType_s3: 'Amazon S3',
  label_sourceType_s3_field_key: 'Khóa truy cập AWS',
  label_sourceType_s3_field_secret: 'Khóa bí mật AWS',
  label_sourceType_s3_field_bucket: 'Nhóm S3',
  label_sourceType_s3_field_region: 'Khu vực AWS',
  label_sourceType_s3_field_prefix: 'Tiền tố nhóm',
  label_sourceType_s3_field_delimiter: 'Dấu phân cách',
  label_sourceType_b2: 'Backblaze B2',
  label_sourceType_b2_field_key: 'ID khóa',
  label_sourceType_b2_field_secret: 'Khóa ứng dụng',
  label_sourceType_b2_field_bucket: 'ID nhóm B2 (không phải tên)',
  label_sourceType_b2_field_partSize: 'Kích thước một phần',
  label_sourceType_b2_field_prefix: 'Tiền tố nhóm',
  label_sourceType_b2_field_delimiter: 'Dấu phân cách',
  admin_label_firstEvent: 'sự kiện đầu tiên',
  admin_label_lastEvent: 'sự kiện cuôi cung',
  admin_label_eventTime: 'thời gian',
  admin_label_eventName: 'Sự kiện',
  admin_label_eventDescription: 'sự mô tả',
  admin_label_xformQueueEmpty: 'Không có công việc đang hoạt động',
  admin_label_migration_noSources: 'Không có nguồn nào được xác định',
  admin_label_migration_results: 'Kết quả di chuyển:',
  admin_label_migration_readSource: 'Nguồn để di chuyển dữ liệu từ',
  admin_label_migration_readPath: 'Đọc từ đường dẫn (trống cho gốc hệ thống tệp)',
  admin_label_readSource: 'Đọc nguồn',
  admin_label_readPath: 'Đọc đường dẫn',
  admin_label_migration_writeSource: 'Nguồn để ghi dữ liệu vào',
  admin_label_migration_writePath: 'Ghi vào đường dẫn (trống cho gốc hệ thống tệp)',
  admin_label_writeSource: 'Ghi nguồn',
  admin_label_writePath: 'Viết đường dẫn',
  admin_button_migrate_data: 'Di chuyển dữ liệu',
  admin_info_migration_success: 'Dữ liệu được di chuyển thành công',
  admin_info_migration_error: 'Đã xảy ra lỗi khi di chuyển dữ liệu',
  http_invalid_request_method: 'Phương thức yêu cầu HTTP {{ method }} không được điểm cuối này hỗ trợ',
  locale_ha: 'Hausa',
  locale_mr: 'Maranthi',
  locale_tr: 'Thổ nhĩ kỳ'
}