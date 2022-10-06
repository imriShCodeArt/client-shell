import { defineMessages } from "react-intl";

const messages = defineMessages({
  app_name: "React Most Wanted",
  sign_in: "כניסה",
  sign_in_title: "כניסה למשתמשים רשומים",
  sign_in_sub_title: "כניסה לחשבון האישי שלכם",
  sign_out: "יציאה",
  sign_up: "יציאה",
  submit: "שליחה",
  email: "אי-מייל",
  email_placeholder: "example@host.com",
  username: "שם משתמש",
  // deepcode ignore NoHardcodedPasswords: intended
  password: "ססמא",
  password_placeholder: "להקליד...",
  about: "אודות",
  home: "דך הבית",
  page_not_found: "לצערנו הדף אינו נמצא...",
  settings: "הגדרות",
  theme: "ערכת נושא",
  default: "רגיל",
  red: "אדום",
  green: "ירוק",
  language: "שפה",
  he: "עברית",
  en: "אנגלית/English",
  de: "גרמנית/Deutsch",
  ru: "רוסית/Русский",
  menu: "תפריט",
  menu_mini_mode: "תפריט מיני",
  offline: "אוף-ליין",
  demos: "דוגמאות",
  dialog_demo: "דיאלוג דמו",
  dialog_title: "Dialog title",
  dialog_action: "YES, Delete",
  dialog_message: `Dialog message. You can put as much text as you want here. 
  Ask a question or show a warning before deleting something. 
  You can also set the action text to something like "YES, Delete" and run that action by passing a "handleAction" prop. 
  This receives a "handleClose" callback with which you can close the dialog when your action is done.`,
  toast_demo: "Demo toast",
  filter_demo: "Demo filter",
  list_page_demo: "List Page demo with {count} rows",
  forgot_password: "שכחתי סיסמא",
  password_reset: "איפוס סיסמא",
  password_confirm: "אישור סיסמא",
  registration: "הרשמה",
  my_account: "החשבון שלי",
  delete_account_dialog_title: "האם ברצונך למחוק את החשבון?",
  delete_account_dialog_message: "חשבונך וכל המידע השמור בו יימחקו תוך {day} יום",
  delete_account_dialog_action: "מחיקת חשבון",
});

export default messages;
