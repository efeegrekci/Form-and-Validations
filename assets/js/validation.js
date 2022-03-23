$(document).ready(function () {

  //Form input keypress
    if ($('#form').length > 0) {
      var validatorForm = $('#form').validate({
        rules: {
          form_name: {
            minlength: 2,
            maxlength: 50,
          },
          form_surname: {
            minlength: 2,
            maxlength: 50,
          },
          form_phone: {
            minlength: 15,
            maxlength: 15,
          },
          form_email: {
            minlength: 5,
            maxlength: 100,
            email: true,
          },
          form_subject: {
            minlength: 2,
            maxlength: 50,
          },
          form_message: {
            minlength: 4,
            maxlength: 150,
          }
        },
        highlight: function (element) {
          if ($(element).is('.form_name')) {
            if (!ValidateName($('.form_name').val())) {
              $('#form .form_name').parent('.inputBox').addClass('error');
            } else {
              $('#form .form_name').parent('.inputBox').removeClass('error');
            }
          }
          if ($(element).is('.form_surname')) {
            if (!ValidateName($('.form_surname').val())) {
              $('#form .form_surname').parent('.inputBox').addClass('error');
            } else {
              $('#form .form_surname').parent('.inputBox').removeClass('error');
            }
          }
          if ($(element).is('.form_phone')) {
            if (!ValidatePhone($('.form_phone').val())) {
              $('#form .form_phone').parent('.inputBox').addClass('error');
            } else {
              $('#form .form_phone').parent('.inputBox').removeClass('error');
            }
          }
          if ($(element).is('.form_email')) {
            if (!ValidateMail($('.form_email').val())) {
              $('#form .form_email').parent('.inputBox').addClass('error');
            } else {
              $('#form .form_email').parent('.inputBox').removeClass('error');
            }
          }
          if ($(element).is('.form_subject')) {
            if (!ValidateName($('.form_subject').val())) {
              $('#form .form_subject').parent('.inputBox').addClass('error');
            } else {
              $('#form .form_subject').parent('.inputBox').removeClass('error');
            }
          }
           else if (!$(element).parent('.inputBox').hasClass('error')) {
            $(element).parent('.inputBox').addClass('error');
          }
        },
        errorPlacement: function errorPlacement(error, element) {},
        success: function (error, element) {
          $(element).parent('.inputBox').removeClass('error');
        },
      });    
    }

  jQuery.validator.addMethod('passwordCheck', function (value, element, param) {
    if (this.optional(element)) {
      return true;
    } else if (!/[A-Z]/.test(value)) {
      return false;
    } else if (!/[a-z]/.test(value)) {
      return false;
    } else if (!/[0-9]/.test(value)) {
      return false;
    }

    return true;
  });
  $(document).on('keypress', '.form_name, .form_surname, .form_subject', function (event) {
    if (event.charCode != 0) {
      var regex = new RegExp('^[a-zA-ZsçÇöÖşŞıİğĞüÜ ]+$');
      var key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode
      );
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    }
  });
  $(document).on('keypress', '.form_email', function (event) {
    if (event.charCode != 0) {
      var regex = new RegExp('^[a-zA-Z0-9@._-]+$');
      var key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode
      );
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    }
  });
  $(document).on('keypress', '.form_phone', function (event) {
    if (event.charCode != 0) {
      var regex = new RegExp('^[0-9]*$');
      var key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode
      );
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    }
  });
  $(document).on('keypress', '.identity_Number', function (event) {
    if (event.charCode != 0) {
      var regex = new RegExp('^[0-9]*$');
      var key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode
      );
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    }
  });
  jQuery.extend(jQuery.validator.messages, {
    required: window.LutfenZorunluAlanlariDoldurun, //"Lütfen zorunlu alanları doldurun."
  });
});

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (elt) {
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = from < 0 ? Math.ceil(from) : Math.floor(from);
    if (from < 0) from += len;
    for (; from < len; from++) {
      if (from in this && this[from] === elt) return from;
    }
    return -1;
  };
}

String.prototype.allTrim =
  String.prototype.allTrim ||
  function () {
    return this.replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '');
  };

String.prototype.replaceSpecialChars =
  String.prototype.replaceSpecialChars ||
  function () {
    return this.replace(',', ' ')
      .replace(';', ' ')
      .replace('(', ' ')
      .replace(')', ' ');
  };

String.prototype.removeSpecialChars =
  String.prototype.removeSpecialChars ||
  function () {
    return this.replace(/[&\/\\#,+()$~%'":*?<>{}^_!\[\]=@|]/g, '');
  };

function isChar(Data) {
  varChars = 'abcçdefgğhıijklmnoöpqrsştuüvwxyzABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZ';
  var isChar = true;
  var index = 0;
  while (index < Data.length && isChar) {
    isChar = varChars.indexOf(Data.charAt(index)) != -1;
    index++;
  }
  if (!isChar) {
    return false;
  }
  return true;
}
function IsNumeric(Data) {
  varChars = '0123456789';
  var isNum = true;
  var index = 0;
  while (index < Data.length && isNum) {
    isNum = varChars.indexOf(Data.charAt(index)) != -1;
    index++;
  }
  if (!isNum) {
    return false;
  }
  return true;
}
function IsNumeric1(Data) {
  varChars = '0123456789';
  var isNum = true;
  var index = 0;
  while (index < Data.length && isNum) {
    isNum = varChars.indexOf(Data.charAt(index)) != -1;
    index++;
  }
  if (!isNum) {
    return false;
  }
  return true;
}
function countWords(text) {
  s = text;
  s = s.replace(/(^\s*)|(\s*$)/gi, '');
  s = s.replace(/[ ]{2,}/gi, ' ');
  s = s.replace(/\n /, '\n');
  return s.split(' ').length;
}
function checkSpecialCharacter(text) {
  if (text.substring(0, 1) == 'ğ' || text.substring(0, 1) == 'Ğ') {
    return false;
  } else {
    return true;
  }
}
function checkMinLength(txt, minCount) {
  return txt.length >= minCount;
}
function checkMaxLength(txt, minCount) {
  return txt.length <= minCount;
}
function checkBesideVowelOrConsonantCharacterInText(txt, besideCount, isVowel) {
  var count = 0;
  var rtn = true;
  var Chars = new Array();

  if (isVowel) {
    Chars = new Array(
      'a',
      'e',
      'o',
      'ö',
      'u',
      'ü',
      'i',
      'ı',
      'A',
      'E',
      'O',
      'Ö',
      'U',
      'Ü',
      'İ',
      'I'
    );
  } else {
    Chars = new Array(
      'q',
      'w',
      'r',
      't',
      'y',
      'p',
      'ğ',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'ş',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      'ç',
      'Q',
      'W',
      'R',
      'T',
      'Y',
      'P',
      'Ğ',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      'Ş',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      'Ç'
    );
  }

  for (m = 0; m < txt.length; m++) {
    var isHasChar = false;
    for (n = 0; n < Chars.length; n++) {
      if (Chars[n] == txt.substring(m, m + 1)) {
        isHasChar = true;
      }
    }

    if (isHasChar) {
      count++;
    } else {
      count = 0;
    }

    if (count >= besideCount) {
      rtn = false;
      break;
    }
  }
  return rtn;
}
function controlAddressText(source) {
  var words = [
    '.mh',
    'mah.',
    'mahalle',
    'cd',
    'cad.',
    'cadde',
    '.sk',
    'sok.',
    'sokak',
    'no.',
    'no:',
    'no',
  ];
  var exists = '0';
  source = source.toLowerCase();
  source = source.split(' ');
  for (i = 0; i < source.lenght; i++) {
    if (words.indexOf(source[i]) != '-1') {
      exists = '1';
    }
    if (i == source.lenght - 1) {
      return exists;
    }
  }
}
function ValidateName(source) {
  if (source == undefined || source == '') {
    return false;
  } else {
    if (
      !checkSpecialCharacter(source) ||
      !checkMinLength(source, 2) ||
      !checkBesideVowelOrConsonantCharacterInText(source, 4, true) ||
      !checkBesideVowelOrConsonantCharacterInText(source, 5, false)
    ) {
      return false;
    }
  }
  return true;
}
function ValidateSurname(source) {
  if (source == undefined || source == '') {
    return false;
  } else {
    if (
      !checkSpecialCharacter(source) ||
      !checkMinLength(source, 2) ||
      !checkBesideVowelOrConsonantCharacterInText(source, 4, true) ||
      !checkBesideVowelOrConsonantCharacterInText(source, 5, false)
    ) {
      return false;
    }
  }
  return true;
}
function ValidateMail(source) {
  var regexControlStr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isValidMail = regexControlStr.test(source);
  return isValidMail ? true : false;
}
function ValidatePhone(source) {
  var blockNumber = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '9999999999',
    '1234567890',
    '2345678901',
    '3456789012',
  ];
  if (source == undefined || source == '') {
    return false;
  } else {
    if (
      !checkMinLength(source, 10) ||
      source.charAt(0) != '5' ||
      blockNumber.indexOf(source) != -1 ||
      !checkMaxLength(source, 10) ||
      !isMobileCode(source.substr(0, 3))
    ) {
      return false;
    }
  }
  return true;
}
function ValidateIdentityNumber(ID) {
  if (ID.substr(0, 1) == 0 && ID.lenght != 11) {
    return false;
  }
  var i = 9,
    md = '',
    mc = '',
    digit,
    mr = '';
  while ((digit = ID.charAt(--i))) {
    i % 2 == 0 ? (md += digit) : (mc += digit);
  }
  if (
    (eval(md.split('').join('+')) * 7 - eval(mc.split('').join('+'))) % 10 !=
    parseInt(ID.substr(9, 1), 10)
  ) {
    return false;
  }
  for (c = 0; c <= 9; c++) {
    mr += ID.charAt(c);
  }
  if (eval(mr.split('').join('+')) % 10 != parseInt(ID.substr(10, 1), 10)) {
    return false;
  }
  return true;
}
function isMobileCode(txt) {
  var first = txt.length == 4 ? '0' : '';
  var codeList = [
    '501',
    '503',
    '505',
    '506',
    '507',
    '551',
    '552',
    '553',
    '554',
    '555',
    '556',
    '559',
    '530',
    '531',
    '532',
    '533',
    '534',
    '535',
    '536',
    '537',
    '538',
    '539',
    '540',
    '541',
    '542',
    '543',
    '544',
    '545',
    '546',
    '547',
    '548',
    '549',
  ];

  for (var i = 0; i < codeList.length; i++) {
    if (first + codeList[i] == txt) {
      return true;
    }
  }
}
function ValidatePhone2(source) {
  var blockNumber = [
    '0000000',
    '1111111',
    '2222222',
    '3333333',
    '4444444',
    '5555555',
    '6666666',
    '7777777',
    '8888888',
    '9999999',
    '1234567',
    '2345678',
    '3456789',
  ];
  if (source == undefined || source == '') {
    return false;
  } else {
    if (
      !checkMinLength(source, 7) ||
      blockNumber.indexOf(source) != -1 ||
      !checkMaxLength(source, 10)
    ) {
      return false;
    }
  }
  return true;
}
function checkMinLength(txt, minCount) {
  return txt.length >= minCount;
}
function checkMaxLength(txt, minCount) {
  return txt.length <= minCount;
}
function ValidatePassword(source) {
  var regexControlStr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  var isValidPassword = regexControlStr.test(source);
  return isValidPassword ? true : false;
}
