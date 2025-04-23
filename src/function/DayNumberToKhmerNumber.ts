export function convertToKhmerNumberWithZeroPrefix(n: string) {
  const symbolNumber: any = {
    "1": "១",
    "2": "២",
    "3": "៣",
    "4": "៤",
    "5": "៥",
    "6": "៦",
    "7": "៧",
    "8": "៨",
    "9": "៩",
    "0": "០",
  };

  if (/^[០-៩]+$/.test(n)) {
    return n;
  }
  const khmer_number = n.replace(/\d/g, function (match: any) {
    return symbolNumber[match];
  });

  return khmer_number;
}

export function khmerMonth(m: any) {
  m = String(m);

  const symboMonth: { [key: string]: any } = {
    Jan: "មករា",
    Feb: "កុម្ភៈ",
    Mar: "មីនា",
    Apr: "មេសា",
    May: "ឧសភា",
    Jun: "មិថុនា",
    Jul: "កក្កដា",
    Aug: "សីហា",
    Sep: "កញ្ញា",
    Oct: "តុលា",
    Nov: "វិច្ឆិកា",
    Dec: "ធ្នូ",
  };

  const month = symboMonth.hasOwnProperty(m) ? symboMonth[m] : "";

  return `${month}`;
}

export function convertToLatinNumber(n: string) {
  // Object mapping Khmer numerals to Arabic numerals
  const khmerToLatinNumber: any = {
    "១": "1",
    "២": "2",
    "៣": "3",
    "៤": "4",
    "៥": "5",
    "៦": "6",
    "៧": "7",
    "៨": "8",
    "៩": "9",
    "០": "0",
  };

  const latinNumber = n.replace(/[០-៩]/g, function (match: any) {
    return khmerToLatinNumber[match];
  });

  return latinNumber;
}

export function convertLatinMonth(khmerMonthName: string): string {
  const monthMapping: { [key: string]: string } = {
    មករា: "Jan",
    កុម្ភៈ: "Feb",
    មីនា: "Mar",
    មេសា: "Apr",
    ឧសភា: "May",
    មិថុនា: "Jun",
    កក្កដា: "Jul",
    សីហា: "Aug",
    កញ្ញា: "Sep",
    តុលា: "Oct",
    វិច្ឆិកា: "Nov",
    ធ្នូ: "Dec",
  };

  return monthMapping[khmerMonthName] || "";
}

export function convertToKhmerMonth(m: any) {
  m = String(m);

  const symboMonth: { [key: string]: any } = {
    January: "មករា",
    February: "កុម្ភៈ",
    March: "មីនា",
    April: "មេសា",
    May: "ឧសភា",
    June: "មិថុនា",
    July: "កក្កដា",
    August: "សីហា",
    September: "កញ្ញា",
    October: "តុលា",
    November: "វិច្ឆិកា",
    December: "ធ្នូ",
    Jan: "មករា",
    Feb: "កុម្ភៈ",
    Mar: "មីនា",
    Apr: "មេសា",
    // May: "ឧសភា",
    Jun: "មិថុនា",
    Jul: "កក្កដា",
    Aug: "សីហា",
    Sep: "កញ្ញា",
    Oct: "តុលា",
    Nov: "វិច្ឆិកា",
    Dec: "ធ្នូ",
  };

  const month = symboMonth.hasOwnProperty(m) ? symboMonth[m] : "";

  return `${month}`;
}
