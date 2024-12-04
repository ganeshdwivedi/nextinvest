"use client";

export function setDefaultCookie(name: string, value: string) {
  if (typeof document !== "undefined") {
    const daysToExpire = 30; // Cookie will expire in 30 days
    const date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;

    document.cookie = `${name}=${value}; ${expires}; path=/`;
    console.log("Default cookie set:", document.cookie);
  } else {
    console.error("Cannot set cookie on the server side.");
  }
}

export function getCookie(name: string) {
  if (typeof document !== "undefined") {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift();
    }
  }
  return null;
}

export function deleteCookie(name: string) {
  if (typeof document !== "undefined") {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    console.log(`${name} cookie deleted.`);
  } else {
    console.error("Cannot delete cookie on the server side.");
  }
}
