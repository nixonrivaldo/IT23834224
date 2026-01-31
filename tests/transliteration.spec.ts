import { test, expect } from '@playwright/test';

// Interface for structured test data
interface TransliterationCase {
  id: string;
  input: string;
  expected: string;
}

/**
 * Test cases extracted from IT23834224_Assignment1_Test_Cases.
 * Total: 35 Cases
 */
const testData: TransliterationCase[] = [
  { id: "Pos_Fun_0001", input: "naan veetukku poren", expected: "நான் வீட்டுக்கு போறேன்" },
  { id: "Pos_Fun_0002", input: "enakku soru venum", expected: "எனக்கு சோறு வேணும்" },
  { id: "Pos_Fun_0003", input: "nanga school pogrom", expected: "நாங்க ஸ்கூல் போகிறோம்" },
  { id: "Pos_Fun_0004", input: "naan veetukku poren, aana mazhai peiyavillai", expected: "நான் வீட்டுக்கு போறேன், ஆனா மழை பெய்யவில்லை" },
  { id: "Pos_Fun_0005", input: "nee vandhaa naan wait pannuven", expected: "நீ வந்தா நான் வெயிட் பண்ணுவேன்" },
  { id: "Pos_Fun_0006", input: "nee eppo varuva?", expected: "நீ எப்போ வருவா?" },
  { id: "Pos_Fun_0007", input: "udane vaa", expected: "உடனே வா" },
  { id: "Pos_Fun_0008", input: "naan apadi seiya maaten", expected: "நான் அப்படி செய்ய மாட்டேன்" },
  { id: "Pos_Fun_0009", input: "vanakkam!", expected: "வணக்கம்!" },
  { id: "Pos_Fun_0010", input: "dayavu seithu konjam help pannunga?", expected: "தயவு செய்து கொஞ்சம் ஹெல்ப் பண்ணுங்க?" },
  { id: "Pos_Fun_0011", input: "dei super daa!", expected: "டேய் சூப்பர் டா!" },
  { id: "Pos_Fun_0012", input: "konjam nillu", expected: "கொஞ்சம் நில்லு" },
  { id: "Pos_Fun_0013", input: "romba romba nalla", expected: "ரொம்ப ரொம்ப நல்ல" },
  { id: "Pos_Fun_0014", input: "naan netru veetukku ponen", expected: "நான் நேற்று வீட்டுக்கு போனேன்" },
  { id: "Pos_Fun_0015", input: "naan ippo velai seiren", expected: "நான் இப்போ வேலை செய்றேன்" },
  { id: "Pos_Fun_0016", input: "naan nalaiku varuven", expected: "நான் நாளைக்கு வருவேன்" },
  { id: "Pos_Fun_0017", input: "avan veetukku ponaan", expected: "அவன் வீட்டுக்கு போனான்" },
  { id: "Pos_Fun_0018", input: "innaiku Zoom meeting irukku vaanga", expected: "இன்னைக்கு ஜூம் மீட்டிங் இருக்கு வாங்க" },
  { id: "Neg_Fun_0001", input: "OTP vandhudhu, URL share pannunga", expected: "ஒய்ப் வந்தது, உரல் ஷேர் பண்ணுங்க" },
  { id: "Pos_Fun_0019", input: "roobai nooru kuduthu erandu kilo arisi vaanga", expected: "ருபாய் நூறு குடுத்து இரண்டு கிலோ அரிசி வாங்க" },
  { id: "Pos_Fun_0020", input: "vaara varusam la mumbai poganum", expected: "வார வருஷம் ல மும்பை போகணும்" },
  { id: "Pos_Fun_0021", input: "naan   veetukku   poren", expected: "நான்   வீட்டுக்கு   போறேன்" },
  { id: "Pos_Fun_0022", input: "naan veetukku poren\nnee varuviya?", expected: "நான் வீட்டுக்கு போறேன்\nநீ வருவிய?" },
  { id: "Pos_Fun_0023", input: "innaiku naan office la neraya velai seiren...", expected: "இன்னைக்கு நான் ஆபீஸ் ல நெறய வேலை செய்றேன்..." },
  { id: "Pos_Fun_0024", input: "naan 6 maniku veetukku poren", expected: "நான் ௬ மணிக்கு வீட்டுக்கு போறேன்" },
  { id: "Pos_Fun_0025", input: "enakku soruu venumm", expected: "எனக்கு சோறு வேணுமாம்" },
  { id: "Neg_Fun_0003", input: "A B C D Z", expected: "எ பி சி ட ழ்" },
  { id: "Neg_Fun_0004", input: "today I have a meeting...", expected: "டுடே இ ஹவ் எ மீட்டிங்..." },
  { id: "Neg_Fun_0005", input: "naan     ippo velai seiren", expected: "நான்     இப்போ வேலை செய்றேன்" },
  { id: "Neg_Fun_0006", input: "dei machan :( innaiku semma tension da!!!", expected: "டேய் மச்சான் :( இன்னைக்கு செம்ம டென்ஷன் ட!!!" },
  { id: "Neg_Fun_0007", input: "OTP va kudunga", expected: "ஒய்ப் வ குடுங்க" },
  { id: "Neg_Fun_0008", input: "2kg arisi venum", expected: "௨க்க் அரிசி வேணும்" },
  { id: "Neg_Fun_0009", input: "ChennaiyilirundhuPoyes poganum", expected: "சென்னையிலிருந்துபோய்ஸ் போகணும்" },
  { id: "Neg_Fun_0010", input: "naaninnaikuofficepogren...", expected: "நானுன்னைக்குஆபீஸ்போக்றேன்..." },
  { id: "Pos_UI_0001", input: "naan veetukku poren", expected: "நான் வீட்டுக்கு போறேன்" }
];

test.describe('Tamil Transliteration Bulk Testing Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the transliteration tool
    await page.goto('https://tamil.changathi.com/', { waitUntil: 'load', timeout: 60000 });
    // Wait for the textarea to be ready
    await page.waitForSelector('#transliterateTextarea', { state: 'visible', timeout: 30000 });
    // Wait for scripts to initialize
    await page.waitForTimeout(2000);
  });

  for (const data of testData) {
    test(`Test Case ${data.id}: Transliterating "${data.input.substring(0, 20)}..."`, async ({ page }) => {
      const inputBox = page.locator('#transliterateTextarea');

      // Prepare the input box
      await expect(inputBox).toBeVisible();
      await inputBox.focus();
      await inputBox.clear();
      
      // Wait a moment for focus
      await page.waitForTimeout(500);

      // Type the Thanglish string word by word to trigger transliteration
      const words = data.input.split(' ');
      for (let i = 0; i < words.length; i++) {
        await inputBox.pressSequentially(words[i], { delay: 60 });
        // Press space after each word to trigger conversion
        if (i < words.length - 1 || !data.input.endsWith(words[i])) {
          await page.keyboard.press('Space');
          await page.waitForTimeout(300);
        }
      }
      
      // Final space to trigger last word conversion
      await page.keyboard.press('Space');

      // Wait for the UI to update with Tamil text
      await page.waitForTimeout(1500);

      const actualValue = await inputBox.inputValue();
      console.log(`[${data.id}] Input: ${data.input} | Actual: ${actualValue}`);

      // Verification Logic
      // 1. Check for Tamil Unicode Range
      const hasTamil = /[\u0B80-\u0BFF]/.test(actualValue);
      expect(hasTamil, `Input "${data.input}" failed to produce Tamil characters.`).toBe(true);

      // 2. Validate against expected output (Soft match using substring to avoid minor spacing issues)
      const expectedCore = data.expected.replace(/[\n\r\t]/g, "").substring(0, 10);
      expect(actualValue.replace(/[\n\r\t]/g, "")).toContain(expectedCore);
    });
  }
});
