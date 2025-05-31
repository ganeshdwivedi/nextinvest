import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { BiCalendar, BiCreditCard, BiMapPin, BiPhone } from "react-icons/bi";
import { CiHeart, CiMapPin } from "react-icons/ci";
import { FaBed, FaDollarSign, FaUserSecret } from "react-icons/fa6";
import { WiFire } from "react-icons/wi";

function Services() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Services Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-slate-500 text-sm lg:text-base font-medium mb-2">
              AMENITIES
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
              Why Choose Our Hostels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Free WiFi */}
            <div className="text-center group hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <WiFire className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Free WiFi
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                High-speed internet connectivity available in all rooms and
                common areas.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center group hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <BiPhone className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                24/7 Support
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Round-the-clock customer support for all your booking and stay
                needs.
              </p>
            </div>

            {/* Easy Booking */}
            <div
              id="#how"
              className="text-center group hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <BiCreditCard className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Easy Booking
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Simple and secure booking process with multiple payment options.
              </p>
            </div>

            {/* Best Price */}
            <div className="text-center group hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <FaDollarSign className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Best Price
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Guaranteed lowest prices with exclusive deals and discounts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Hostels Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-slate-500 text-sm lg:text-base font-medium mb-2">
              Most Booked
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
              Featured Hostels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Luxury Suite, Mumbai */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1721742736282-06b1eb4cbe50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Luxury Suite in Mumbai"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      Luxury Suite, Mumbai
                    </h3>
                    <p className="text-orange-600 text-lg font-bold">
                      ₹2,500
                      <span className="text-sm text-slate-600 font-normal">
                        /per month
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {/* <Star className="w-4 h-4 text-yellow-400 fill-current" /> */}
                    <CiHeart className="text-orange-500 text-2xl" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                  <BiMapPin className="w-4 h-4 mr-1" />
                  <span>Bandra West, Mumbai</span>
                </div>
              </div>
            </Card>

            {/* Deluxe Room, Delhi */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1619810230359-b2c2f61c49cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Deluxe Room in Delhi"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      Deluxe Room, Delhi
                    </h3>
                    <p className="text-orange-600 text-lg font-bold">
                      ₹1,800
                      <span className="text-sm text-slate-600 font-normal">
                        /per month
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {/* <Star className="w-4 h-4 text-yellow-400 fill-current" /> */}
                    <CiHeart className="text-orange-500 text-2xl" />
                    <span className="text-sm font-medium">4.6</span>
                  </div>
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                  <CiMapPin className="w-4 h-4 mr-1" />
                  <span>Connaught Place, Delhi</span>
                </div>
              </div>
            </Card>

            {/* Premium Room, Bangalore */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="relative h-64">
                <img
                  src="https://zolostays.com/blog/wp-content/uploads/2023/12/Should-I-go-to-hostel-in-college_.jpg"
                  alt="Premium Room in Bangalore"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      Premium Room, Bangalore
                    </h3>
                    <p className="text-orange-600 text-lg font-bold">
                      ₹2,200
                      <span className="text-sm text-slate-600 font-normal">
                        /per month
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <CiHeart className="text-orange-500 text-2xl" />
                    {/* <Star className="w-4 h-4 text-yellow-400 fill-current" /> */}
                    <span className="text-sm font-medium">4.7</span>
                  </div>
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                  <BiMapPin className="w-4 h-4 mr-1" />
                  <span>Koramangala, Bangalore</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Book Your Stay Section */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <p className="text-slate-500 text-sm lg:text-base font-medium mb-2">
                  Easy and Fast
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  Book Your Stay In 3 Easy Steps
                </h2>
              </div>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-semibold mb-1">
                      Search Hostels
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Enter your destination, check-in and check-out dates, and
                      number of guests.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-semibold mb-1">
                      Select & Pay
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Choose your preferred room type and complete secure
                      payment with multiple options.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-semibold mb-1">
                      Check-in
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Show your booking confirmation at the hostel reception and
                      enjoy your stay.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Booking Card */}
            <div className="relative">
              <div className="overflow-hidden shadow-xl border-0 max-w-sm mx-auto lg:mx-0">
                <div className="relative h-48">
                  <Image
                    src="/images/Rectangle 17.jpg"
                    alt="Hostel Room Booking"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Hostel Booking
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-600 text-sm">
                      <BiCalendar className="w-4 h-4 mr-2" />
                      <span>15-18 Dec | 3 per months</span>
                    </div>
                    <div className="flex items-center text-slate-600 text-sm">
                      <FaUserSecret className="w-4 h-4 mr-2" />
                      <span>2 Guests • 1 Room</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
                        <div className="w-6 h-6 bg-slate-400 rounded-full -ml-2"></div>
                      </div>
                      <span className="text-slate-600 text-sm">
                        +2 more guests
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <WiFire className="w-4 h-4 text-slate-400" />
                      <FaBed className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400">🚿</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-600 text-sm">4.8</span>
                      <CiHeart className="text-orange-500 text-2xl" />
                      {/* <Star className="w-4 h-4 text-yellow-400 fill-current" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
