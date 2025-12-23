// src/components/equipment/EquipmentDetail.tsx
'use client'

import { Calendar, Users, Shield, Zap, MapPin, Clock, DollarSign, FileText } from 'lucide-react'
import { Equipment } from '@/lib/types/equipment'
import ResponsiveCenteredImageCarousel from '@/components/common/UI/ResponsiveCenteredImageCarousel'

interface EquipmentDetailProps {
  equipment: Equipment
}

export default function EquipmentDetail({ equipment }: EquipmentDetailProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Takes 2/3 of the space */}
      <div className="lg:col-span-2 flex flex-col gap-8">
        {/* Image Carousel Section */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <ResponsiveCenteredImageCarousel 
            images={equipment.images} 
            alt={equipment.name}
            className="rounded-xl"
            maxHeight="400px"
          />
        </div>
        
        {/* Equipment Overview */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Equipment Overview</h2>
          <p className="text-gray-700 text-lg mb-4">{equipment.description}</p>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Primary Applications</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span>Site preparation and excavation</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span>Material handling and transportation</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span>Concrete pouring and placement</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span>Heavy lifting and positioning</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-7">
          <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipment.specifications.map((spec, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <Zap size={20} className="text-primary-600 mr-3" />
                  <span className="font-medium">{spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Right Column - Takes 1/3 of the space */}
      <div className="lg:col-span-1 flex flex-col gap-6 h-fit lg:sticky lg:top-8">
        {/* Quick Details - Fixed height section */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
          <h3 className="text-xl font-bold mb-4">Quick Details</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar size={20} className="text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">Manufacturing Year</div>
                <div className="font-semibold">{equipment.year}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Zap size={20} className="text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">Capacity</div>
                <div className="font-semibold">{equipment.capacity} {equipment.unit}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Shield size={20} className="text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">Safety Rating</div>
                <div className="font-semibold">{equipment.safetyRating}/5</div>
              </div>
            </div>
            <div className="flex items-center">
              <Users size={20} className="text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">Operator Requirement</div>
                <div className="font-semibold">{equipment.operatorCount} certified</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">Current Location</div>
                <div className="font-semibold">{equipment.location || 'Project Site'}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-500">Status</div>
                <div className={`font-semibold ${
                  equipment.status === 'Available' ? 'text-green-600' :
                  equipment.status === 'In Use' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {equipment.status}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pricing Options - Fixed height section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white flex-1">
          <h3 className="text-xl font-bold mb-4">Pricing Options</h3>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <DollarSign size={20} className="mr-2" />
                <span>Daily Rental</span>
              </div>
              <div className="text-2xl font-bold">${equipment.rentalPrice}/day</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <DollarSign size={20} className="mr-2" />
                <span>Monthly Rental</span>
              </div>
              <div className="text-2xl font-bold">${equipment.rentalPrice ? equipment.rentalPrice * 25 : 0}/month</div>
            </div>
            <div className="flex justify-between items-center border-t border-white/20 pt-4">
              <div className="flex items-center">
                <FileText size={20} className="mr-2" />
                <span>Purchase Price</span>
              </div>
              <div className="text-2xl font-bold">${equipment.purchasePrice?.toLocaleString()}</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <button className="w-full bg-white text-primary-700 hover:bg-gray-100 px-4 py-3 rounded-lg font-semibold transition">
              Request Rental Quote
            </button>
            <button className="w-full border-2 border-white text-white hover:bg-white/10 px-4 py-3 rounded-lg font-semibold transition">
              Schedule Demonstration
            </button>
            <button className="w-full text-white hover:bg-white/5 px-4 py-3 rounded-lg font-medium transition">
              Download Spec Sheet
            </button>
          </div>
        </div>
        
        {/* Maintenance Schedule - Adjusts based on available space */}
        {equipment.maintenanceSchedule && (
          <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
            <h3 className="text-xl font-bold mb-4">Maintenance Schedule</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500">Last Service</div>
                <div className="font-semibold">{equipment.maintenanceSchedule.lastService}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Next Service Due</div>
                <div className="font-semibold text-primary-600">{equipment.maintenanceSchedule.nextService}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Service History</div>
                <ul className="text-sm text-gray-600 max-h-32 overflow-y-auto pr-2">
                  {equipment.maintenanceSchedule.serviceHistory.map((date, index) => (
                    <li key={index} className="flex items-center py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 flex-shrink-0"></div>
                      <span className="truncate">{date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}