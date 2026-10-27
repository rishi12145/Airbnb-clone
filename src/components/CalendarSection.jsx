import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CalendarSection.css';

export default function CalendarSection({ 
  checkInDate, 
  checkOutDate, 
  onSelectDates, 
  onClearDates 
}) {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // 0 = Nov 2026, 1 = Dec 2026, etc.

  // Calendar setup: starting from Nov 2026
  const baseYear = 2026;
  const baseMonth = 10; // 0-indexed: 10 = November

  const getMonthData = (offset) => {
    const date = new Date(baseYear, baseMonth + offset, 1);
    const monthName = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
    const firstDayIndex = date.getDay(); // 0 = Sunday

    return { monthName, year, daysInMonth, firstDayIndex, monthNum: date.getMonth() };
  };

  const month1 = getMonthData(currentMonthIndex);
  const month2 = getMonthData(currentMonthIndex + 1);

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const diffTime = Math.abs(new Date(checkOutDate) - new Date(checkInDate));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();

  const handleDateClick = (year, month, day) => {
    const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    if (!checkInDate || (checkInDate && checkOutDate)) {
      // Starting new selection
      onSelectDates(formattedDate, null);
    } else if (checkInDate && !checkOutDate) {
      // Second click: if clicked before checkInDate, reset check-in
      if (new Date(formattedDate) < new Date(checkInDate)) {
        onSelectDates(formattedDate, null);
      } else {
        onSelectDates(checkInDate, formattedDate);
      }
    }
  };

  const isSelected = (year, month, day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return dateStr === checkInDate || dateStr === checkOutDate;
  };

  const isInRange = (year, month, day) => {
    if (!checkInDate || !checkOutDate) return false;
    const current = new Date(`${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
    return current > new Date(checkInDate) && current < new Date(checkOutDate);
  };

  const renderMonthGrid = (m) => {
    const cells = [];
    // Blank days before 1st of month
    for (let i = 0; i < m.firstDayIndex; i++) {
      cells.push(<div key={`blank-${i}`} className="cal-cell blank-cell" />);
    }
    // Days of month
    for (let day = 1; day <= m.daysInMonth; day++) {
      const selected = isSelected(m.year, m.monthNum, day);
      const inRange = isInRange(m.year, m.monthNum, day);
      const isStart = checkInDate && `${m.year}-${String(m.monthNum + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` === checkInDate;
      const isEnd = checkOutDate && `${m.year}-${String(m.monthNum + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` === checkOutDate;

      cells.push(
        <button
          key={`day-${day}`}
          className={`cal-cell day-cell ${selected ? 'is-selected' : ''} ${inRange ? 'in-range' : ''} ${isStart ? 'range-start' : ''} ${isEnd ? 'range-end' : ''}`}
          onClick={() => handleDateClick(m.year, m.monthNum, day)}
          aria-label={`${m.monthName} ${day}, ${m.year}`}
        >
          <span className="day-number">{day}</span>
        </button>
      );
    }
    return cells;
  };

  return (
    <div className="calendar-section">
      <div className="calendar-heading-wrap">
        <div>
          <h3 className="calendar-title">
            {nights > 0 ? `${nights} nights in Manali` : 'Select check-in date'}
          </h3>
          <p className="calendar-subtitle">
            {checkInDate && checkOutDate 
              ? `${checkInDate} – ${checkOutDate}` 
              : 'Add your travel dates for exact pricing'}
          </p>
        </div>

        {checkInDate && (
          <button className="clear-dates-btn" onClick={onClearDates}>
            Clear dates
          </button>
        )}
      </div>

      <div className="dual-calendar-wrapper">
        {/* Navigation controls */}
        <div className="cal-nav-buttons">
          <button 
            className="cal-nav-btn prev"
            onClick={() => setCurrentMonthIndex(prev => Math.max(0, prev - 1))}
            disabled={currentMonthIndex === 0}
            aria-label="Previous month"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            className="cal-nav-btn next"
            onClick={() => setCurrentMonthIndex(prev => prev + 1)}
            aria-label="Next month"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dual Months */}
        <div className="dual-months-container">
          {/* Month 1 */}
          <div className="month-block">
            <h4 className="month-header">{month1.monthName} {month1.year}</h4>
            <div className="weekdays-row">
              <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
            </div>
            <div className="days-grid">
              {renderMonthGrid(month1)}
            </div>
          </div>

          {/* Month 2 */}
          <div className="month-block">
            <h4 className="month-header">{month2.monthName} {month2.year}</h4>
            <div className="weekdays-row">
              <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
            </div>
            <div className="days-grid">
              {renderMonthGrid(month2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
