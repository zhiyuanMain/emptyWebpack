export default function sprintf(str) {
    var args = arguments,
        flag = true,
        i = 1;
    str = str.replace(/%s/g, function () {
        var arg = args[i++];
        if (typeof arg === 'undefined') {
            flag = false;
            console.warn('参数个数不匹配 返回值已清空')
            return '';
        }
        return arg;
    })
    return flag ? str : '';
}