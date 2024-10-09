"use client";

// Since @next/third-parties/google is not found, let's use a more standard approach
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

function sendGAEvent(params: any) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", params.event, params);
  } else {
    console.error("Google Analytics not initialized");
  }
}
// Generate a unique session ID
const sessionId =
  Date.now().toString(36) + Math.random().toString(36).substr(2);

function sendEnhancedEvent(eventName: string, eventParams: any) {
  const payload = {
    event: eventName,
    session_id: sessionId,
    ...eventParams,
  };

  // console.log(`Sending ${eventName} event`, JSON.stringify(payload, null, 2));
  // try {
  //   sendGAEvent(payload);
  // } catch (error) {
  //   console.error(`Error sending ${eventName} event:`, error);
  // }

  sendServerEvents(eventName, eventParams);
}

function sendServerEvents(eventName: string, eventParams: any) {
  if (!localStorage.getItem("ext-ID"))
    localStorage.setItem("ext-ID", crypto.randomUUID());

  // console.log({
  //   client_id: localStorage.getItem("ext-ID"),
  //   event_name: eventName,
  //   event_params: {
  //     ...eventParams,
  //   },
  // });
  //
  fetch(`https://jellyfish-app-mqgem.ondigitalocean.app/google-analytics-api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer EAAMi1bkn4eQBOZCHsnmtxUGfi0sZCqRxIuuYf`,
    },
    body: JSON.stringify({
      data: {
        client_id: localStorage.getItem("ext-ID"),
        event_name: eventName,
        event_params: {
          ...eventParams,
        },
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log("Google Data Sent");
      // console.log("Response: ", data);
    })
    .catch((error) => console.error("Error:", JSON.stringify(error)));
}

export function pageView(url: string) {
  sendEnhancedEvent("page_view", {
    page_location: url,
    page_title: document.title,
  });
}

export function viewItem({
  title,
  slug,
  itemId,
  itemType,
  value,
}: {
  title: string;
  slug: string;
  itemId: string;
  itemType: string;
  value: number;
}) {
  sendEnhancedEvent("view_item", {
    event_id: Date.now().toString(),
    currency: "INR",
    value: value,
    // items: [{
    item_name: title,
    item_id: itemId,
    price: value,
    item_category: itemType,
    item_variant: slug,
    quantity: 1,
    // }]
  });
}

export function addToCart({
  title,
  slug,
  itemId,
  itemType,
  value,
}: {
  title: string;
  slug: string;
  itemId: string;
  itemType: string;
  value: number;
}) {
  sendEnhancedEvent("add_to_cart", {
    event_id: Date.now().toString(),
    currency: "INR",
    value: value,
    // items: [{
    item_name: title,
    item_id: itemId,
    price: value,
    item_category: itemType,
    item_variant: slug,
    quantity: 1,
    // }]
  });
}

export function beginCheckout({
  title,
  itemId,
  amount,
  itemType,
  name,
  email,
  state,
  loggedIn,
}: {
  title: string;
  itemId: string;
  name: string;
  email: string;
  state: string;
  amount: number;
  itemType: string;
  loggedIn: boolean;
}) {
  sendEnhancedEvent("begin_checkout", {
    event_id: Date.now().toString(),
    currency: "INR",
    value: amount,
    // items: [{
    item_name: title,
    item_id: itemId,
    price: amount,
    item_category: itemType,
    quantity: 1,
    // }],
    // user_properties: {
    user_id: email,
    name,
    email,
    state,
    logged_in: loggedIn,
    // }
  });
}

export function purchase({
  title,
  itemId,
  amount,
  itemType,
  name,
  email,
  state,
  loggedIn,
}: {
  title: string;
  itemId: string;
  name: string;
  email: string;
  state: string;
  amount: number;
  itemType: string;
  loggedIn: boolean;
}) {
  sendEnhancedEvent("purchase", {
    currency: "INR",
    // items: [
    //   {
    item_name: title,
    item_id: itemId,
    price: amount,
    item_category: itemType,
    quantity: 1,
    //   },
    // ],
    // user_properties: {
    user_id: email,
    name,
    email,
    state,
    logged_in: loggedIn,
    // },
  });

  sendEnhancedEvent("conversion_event_purchase", {
    transaction_id: Date.now().toString(),
    value: amount,
    currency: "INR",
    // items: [{
    item_name: title,
    item_id: itemId,
    price: amount,
    item_category: itemType,
    quantity: 1,
    // }],
    // user_properties: {
    user_id: email,
    name,
    email,
    state,
    logged_in: loggedIn,
    // }
  });
}

export function startCourse(courseId: string, courseName: string) {
  sendEnhancedEvent("start_course", {
    course_id: courseId,
    course_name: courseName,
  });
}

export function completeCourse(courseId: string, courseName: string) {
  sendEnhancedEvent("complete_course", {
    course_id: courseId,
    course_name: courseName,
  });
}

export function trackLessonProgress(
  courseId: string,
  lessonId: string,
  progress: number
) {
  sendEnhancedEvent("lesson_progress", {
    course_id: courseId,
    lesson_id: lessonId,
    progress_percentage: progress,
  });
}

export function trackEngagement(action: string, label: string) {
  sendEnhancedEvent("user_engagement", {
    engagement_type: action,
    engagement_label: label,
  });
}

export function trackFormSubmission(formName: string, success: boolean) {
  sendEnhancedEvent("form_submission", {
    form_name: formName,
    submission_success: success,
  });
}

export function trackSearch(searchTerm: string, resultCount: number) {
  sendEnhancedEvent("search", {
    search_term: searchTerm,
    number_of_results: resultCount,
  });
}
