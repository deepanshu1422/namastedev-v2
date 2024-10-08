"use client";

import { sendGAEvent } from "@next/third-parties/google";

// Generate a unique session ID
const sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);

function sendEnhancedEvent(eventName: string, eventParams: any) {
  console.log(`Sending ${eventName} event`, eventParams);
  sendGAEvent({
    event: eventName,
    session_id: sessionId,
    ...eventParams
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
    ecommerce: {
      currency: "INR",
      value: value,
      items: [{
        item_name: title,
        item_id: itemId,
        price: value,
        item_category: itemType,
        item_variant: slug,
        item_type: 'course',
        quantity: 1
      }]
    },
    currency: "INR",
    value: value
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
    ecommerce: {
      currency: "INR",
      value: value,
      items: [{
        item_name: title,
        item_id: itemId,
        price: value,
        item_category: itemType,
        item_variant: slug,
        item_type: 'course',
        quantity: 1
      }]
    },
    currency: "INR",
    value: value
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
    ecommerce: {
      currency: "INR",
      value: amount,
      items: [{
        item_name: title,
        item_id: itemId,
        price: amount,
        item_category: itemType,
        item_type: 'course',
        quantity: 1
      }]
    },
    currency: "INR",
    value: amount,
    user_properties: {
      user_id: email,
      name,
      email,
      state,
      logged_in: loggedIn
    }
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
    ecommerce: {
      transaction_id: Date.now().toString(),
      value: amount,
      currency: "INR",
      items: [{
        item_name: title,
        item_id: itemId,
        price: amount,
        item_category: itemType,
        item_type: 'course',
        quantity: 1
      }]
    },
    currency: "INR",
    value: amount,
    user_properties: {
      user_id: email,
      name,
      email,
      state,
      logged_in: loggedIn
    }
  });
}

// New functions for course-specific events
export function startCourse(courseId: string, courseName: string) {
  sendEnhancedEvent("start_course", {
    course_id: courseId,
    course_name: courseName
  });
}

export function completeCourse(courseId: string, courseName: string) {
  sendEnhancedEvent("complete_course", {
    course_id: courseId,
    course_name: courseName
  });
}

export function trackLessonProgress(courseId: string, lessonId: string, progress: number) {
  sendEnhancedEvent("lesson_progress", {
    course_id: courseId,
    lesson_id: lessonId,
    progress_percentage: progress
  });
}

export function trackEngagement(action: string, label: string) {
  sendEnhancedEvent("user_engagement", {
    engagement_type: action,
    engagement_label: label
  });
}

export function trackFormSubmission(formName: string, success: boolean) {
  sendEnhancedEvent("form_submission", {
    form_name: formName,
    submission_success: success
  });
}

export function trackSearch(searchTerm: string, resultCount: number) {
  sendEnhancedEvent("search", {
    search_term: searchTerm,
    number_of_results: resultCount
  });
}
