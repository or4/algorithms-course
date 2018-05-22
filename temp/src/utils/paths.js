import PATH_HOST from '../constants/paths';

const getAbsolutePath = relativePath => [PATH_HOST, relativePath].join('');

export default getAbsolutePath;
