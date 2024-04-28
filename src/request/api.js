import ajax from "./request";



const baseUrl = 'http://127.0.0.1:5000';
export const institute_two = () => ajax(`${baseUrl}/institute_two`,{},'get');
export const get_yjs_jdwd = (data) => ajax(`${baseUrl}/get_yjs_jdwd`,data,'post');
export const get_scientific_research_progress = (data) => ajax(`${baseUrl}/get_scientific_research_progress`,data,'post');
export const get_keyword_frequency = (data) => ajax(`${baseUrl}/get_keyword_frequency`,data,'post');
export const get_leaders_info = (data) => ajax(`${baseUrl}/get_leaders_info`,data,'post');
export const get_personnel_composition = (data) => ajax(`${baseUrl}/get_personnel_composition`,data,'post');




export const get_data = (data) => ajax(`${baseUrl}/app01/get_data/`, data,'post');

export const get_functional_features_configuration = (data) => ajax(`${baseUrl}/app02/get_functional_features_configuration/`, data,'post');

export const get_docx_list = (data) => ajax(`${baseUrl}/app02/get_docx_list/`, data,'post');

export const preview_docx = (data) => ajax(`${baseUrl}/app02/preview_docx/`, data,'post');

export const download_docx = (data) => ajax(`${baseUrl}/app02/download_docx/`, data,'post');

export const search_docx = (data) => ajax(`${baseUrl}/app02/search_docx/`, data,'post');
export const p_search_docx = (data) => ajax(`${baseUrl}/app02/p_search_docx/`, data,'post');

export const replace_softname = (data) => ajax(`${baseUrl}/app02/replace_softname/`, data,'post');


export const save_gntd_config = (data) => ajax(`${baseUrl}/app02/save_gntd_config/`, data,'post');

export const save_c_code = (data) => ajax(`${baseUrl}/app02/save_c_code/`, data,'post');
export const save_java_code = (data) => ajax(`${baseUrl}/app02/save_java_code/`, data,'post');
export const save_csharp_code = (data) => ajax(`${baseUrl}/app02/save_csharp_code/`, data,'post');
export const save_php_code = (data) => ajax(`${baseUrl}/app02/save_php_code/`, data,'post');

export const add_softname = (data) => ajax(`${baseUrl}/app02/add_softname/`, data,'post');
export const p_delete = (data) => ajax(`${baseUrl}/app02/p_delete/`, data,'post');
export const delete_docx = (data) => ajax(`${baseUrl}/app02/delete_docx/`, data,'post');

export const p_download_zip = (data) => ajax(`${baseUrl}/app02/p_download_zip/`, data,'post');


export const save_config = (data) => ajax(`${baseUrl}/app02/save_config/`, data,'post');



export const search_user = (data) => ajax(`${baseUrl}/app02/search_user/`, data,'post');
export const edit_user = (data) => ajax(`${baseUrl}/app02/edit_user/`, data,'post');
export const delete_user = (data) => ajax(`${baseUrl}/app02/delete_user/`, data,'post');
export const add_user = (data) => ajax(`${baseUrl}/app02/add_user/`, data,'post');
export const save_user = (data) => ajax(`${baseUrl}/app02/save_user/`, data,'post');

export const search_log = (data) => ajax(`${baseUrl}/app02/search_log/`, data,'post');
//  登录
export const login = (data) => ajax(`${baseUrl}/app02/login/`, data,'post');

// 登录验证码
export const captcha = () => ajax(`${baseUrl}/captcha/refresh`,'get');
// 用户修改密码
export const update_pwd = (data) => ajax(`${baseUrl}/user_manage/update_pwd/`, data,'post');

// export const streamoutputbyfetch=(data,element_id)=>fetchAndDisplayStreamedData(`${baseUrl}/app02/get_functional_features_configuration/`,data,element_id);


