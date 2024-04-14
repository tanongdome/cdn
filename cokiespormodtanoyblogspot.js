const config = {
  current_lang: "th",
  autorun: true,
  autoclear_cookies: true,
  languages: {
    en: {
      consent_modal: {
        title: "เว็บไซต์นี้ใช้ Cookie",
        description:
          ' เว็บไซต์นี้มีการใช้คุกกี้เพื่อเก็บข้อมูลการเยี่ยมชม หากยอมรับกรุณาคลิกปุ่มยอมรับด้านล่าง เพื่อยืนยันการเยี่ยมชมต่อ หากคุณไม่ยอมรับคุกกี้ ให้คลิกปุ่มปฏิเสธ หากสงสัยว่าเราใช้คุกกี้ทำอะไร อ่าน นโยบายคุกกี้ เพื่อทำความเข้าใจเพิ่มเติม <button type="button" data-cc="c-settings" class="cc-link">การตั้งค่าคุกกี้</button>',
        primary_btn: {
          text: "ยอมรับทั้งหมด",
          role: "ปฏิเสธทั้งหมด", // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Reject all",
          role: "accept_necessary", // 'settings' or 'accept_necessary'
        },
      },
      settings_modal: {
        title: "Cookie preferences",
        save_settings_btn: "Save settings",
        accept_all_btn: "Accept all",
        reject_all_btn: "Reject all",
        close_btn_label: "Close",
        cookie_table_headers: [
          { col1: "Name" },
          { col2: "Domain" },
          { col3: "Expiration" },
          { col4: "Description" },
        ],
        blocks: [
          {
            title: "Cookie usage 📢",
            description:
              'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.',
          },
          {
            title: "Strictly necessary cookies",
            description:
              "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },
          {
            title: "Performance and Analytics cookies",
            description:
              "These cookies allow the website to remember the choices you have made in the past",
            toggle: {
              value: "analytics", // your cookie category
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              // list of all expected cookies
              {
                col1: "^_ga", // match all cookies starting with "_ga"
                col2: "google.com",
                col3: "2 years",
                col4: "description ...",
                is_regex: true,
              },
              {
                col1: "_gid",
                col2: "google.com",
                col3: "1 day",
                col4: "description ...",
              },
            ],
          },
          {
            title: "Advertisement and Targeting cookies",
            description:
              "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",
            toggle: {
              value: "targeting",
              enabled: false,
              readonly: false,
            },
          },
          {
            title: "More information",
            description:
              'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
          },
        ],
      },
    },
  },
};

let cc = initCookieConsent();
cc.run(config);
