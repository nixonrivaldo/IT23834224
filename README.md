# Tamil Transliteration Testing Suite

Automated Playwright test suite for testing Tamil transliteration functionality on [tamil.changathi.com](https://tamil.changathi.com/).

## Overview

This project contains 35 automated test cases that verify the Tamil transliteration functionality, converting Romanized Tamil (Tanglish) text into Tamil script.

## Prerequisites

- Node.js (v16 or higher)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nixonrivaldo/IT23834224.git
   cd IT23834224
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install chromium
   ```

## Running Tests

### Headed Mode (with browser visible)
```bash
npx playwright test --headed --project=chromium
```

### Headless Mode (without browser UI)
```bash
npx playwright test --project=chromium
```

### View HTML Report
```bash
npx playwright show-report
```

## Test Cases

### Positive Functional Tests (Pos_Fun)

| Test ID | Description | Input | Expected Output |
|---------|-------------|-------|-----------------|
| Pos_Fun_0001 | Basic sentence | naan veetukku poren | நான் வீட்டுக்கு போறேன் |
| Pos_Fun_0002 | Food request | enakku soru venum | எனக்கு சோறு வேணும் |
| Pos_Fun_0003 | School sentence | nanga school pogrom | நாங்க ஸ்கூல் போகிறோம் |
| Pos_Fun_0004 | Comma handling | naan veetukku poren, aana mazhai peiyavillai | நான் வீட்டுக்கு போறேன், ஆனா மழை பெய்யவில்லை |
| Pos_Fun_0005 | English words | nee vandhaa naan wait pannuven | நீ வந்தா நான் வெயிட் பண்ணுவேன் |
| Pos_Fun_0006 | Question mark | nee eppo varuva? | நீ எப்போ வருவா? |
| Pos_Fun_0007 | Short sentence | udane vaa | உடனே வா |
| Pos_Fun_0008 | Negation | naan apadi seiya maaten | நான் அப்படி செய்ய மாட்டேன் |
| Pos_Fun_0009 | Exclamation | vanakkam! | வணக்கம்! |
| Pos_Fun_0010 | Help request | dayavu seithu konjam help pannunga? | தயவு செய்து கொஞ்சம் ஹெல்ப் பண்ணுங்க? |
| Pos_Fun_0011 | Casual expression | dei super daa! | டேய் சூப்பர் டா! |
| Pos_Fun_0012 | Command | konjam nillu | கொஞ்சம் நில்லு |
| Pos_Fun_0013 | Repeated words | romba romba nalla | ரொம்ப ரொம்ப நல்ல |
| Pos_Fun_0014 | Past tense | naan netru veetukku ponen | நான் நேற்று வீட்டுக்கு போனேன் |
| Pos_Fun_0015 | Present tense | naan ippo velai seiren | நான் இப்போ வேலை செய்றேன் |
| Pos_Fun_0016 | Future tense | naan nalaiku varuven | நான் நாளைக்கு வருவேன் |
| Pos_Fun_0017 | Third person | avan veetukku ponaan | அவன் வீட்டுக்கு போனான் |
| Pos_Fun_0018 | Brand names | innaiku Zoom meeting irukku vaanga | இன்னைக்கு ஜூம் மீட்டிங் இருக்கு வாங்க |
| Pos_Fun_0019 | Currency | roobai nooru kuduthu erandu kilo arisi vaanga | ருபாய் நூறு குடுத்து இரண்டு கிலோ அரிசி வாங்க |
| Pos_Fun_0020 | City name | vaara varusam la mumbai poganum | வார வருஷம் ல மும்பை போகணும் |
| Pos_Fun_0021 | Multiple spaces | naan   veetukku   poren | நான்   வீட்டுக்கு   போறேன் |
| Pos_Fun_0022 | Newline handling | naan veetukku poren\nnee varuviya? | நான் வீட்டுக்கு போறேன்\nநீ வருவிய? |
| Pos_Fun_0023 | Ellipsis | innaiku naan office la neraya velai seiren... | இன்னைக்கு நான் ஆபீஸ் ல நெறய வேலை செய்றேன்... |
| Pos_Fun_0024 | Numbers | naan 6 maniku veetukku poren | நான் ௬ மணிக்கு வீட்டுக்கு போறேன் |
| Pos_Fun_0025 | Double letters | enakku soruu venumm | எனக்கு சோறு வேணுமாம் |

### Negative Functional Tests (Neg_Fun)

| Test ID | Description | Input | Expected Output |
|---------|-------------|-------|-----------------|
| Neg_Fun_0001 | Abbreviations (OTP, URL) | OTP vandhudhu, URL share pannunga | ஒய்ப் வந்தது, உரல் ஷேர் பண்ணுங்க |
| Neg_Fun_0003 | Single English letters | A B C D Z | எ பி சி ட ழ் |
| Neg_Fun_0004 | Full English sentence | today I have a meeting... | டுடே இ ஹவ் எ மீட்டிங்... |
| Neg_Fun_0005 | Excessive spaces | naan     ippo velai seiren | நான்     இப்போ வேலை செய்றேன் |
| Neg_Fun_0006 | Emoticons | dei machan :( innaiku semma tension da!!! | டேய் மச்சான் :( இன்னைக்கு செம்ம டென்ஷன் ட!!! |
| Neg_Fun_0007 | Short abbreviation | OTP va kudunga | ஒய்ப் வ குடுங்க |
| Neg_Fun_0008 | Numbers with units | 2kg arisi venum | ௨க்க் அரிசி வேணும் |
| Neg_Fun_0009 | CamelCase | ChennaiyilirundhuPoyes poganum | சென்னையிலிருந்துபோய்ஸ் போகணும் |
| Neg_Fun_0010 | No spaces | naaninnaikuofficepogren... | நானுன்னைக்குஆஃபீஸ்ப்போகிறேன்... |

### UI Tests (Pos_UI)

| Test ID | Description | Input | Expected Output |
|---------|-------------|-------|-----------------|
| Pos_UI_0001 | Basic UI transliteration | naan veetukku poren | நான் வீட்டுக்கு போறேன் |

## Configuration

The test configuration is defined in `playwright.config.ts`:

- **Timeout**: 120 seconds per test
- **Retries**: 1 retry on failure
- **Workers**: 1 (sequential execution)
- **Browser**: Chromium
- **Screenshots**: Captured on failure
- **Traces**: Recorded on first retry

## Project Structure

```
IT23834224/
├── tests/
│   └── transliteration.spec.ts   # All 35 test cases
├── playwright.config.ts           # Playwright configuration
├── package.json                   # Dependencies
└── README.md                      # This file
```

## Test Results

After running tests, view the HTML report:
```bash
npx playwright show-report
```

Reports and screenshots are saved in the `playwright-report/` directory.

## Author

Nixon Rivaldo - IT23834224

## License

This project is for educational purposes.
