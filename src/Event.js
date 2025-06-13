import './Event.css';
import { useState } from 'react';

export default function Event(){
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    // Get current year and month
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Get today's date
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
    const todayDate = today.getDate();
    
    // Calculate date difference
    const calculateDateDifference = () => {
        if (!selectedDate) return null;
        
        const diffTime = Math.abs(selectedDate - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return "Today";
        if (diffDays === 1) return "Tomorrow";
        if (diffDays === -1) return "Yesterday";
        
        return `${diffDays} days ${selectedDate > today ? 'from now' : 'ago'}`;
    };
    
    // Check if it's a leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    
    // Get days in month
    const getDaysInMonth = (month, year) => {
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month === 1 && isLeapYear) { // February in leap year
            return 29;
        }
        return daysInMonth[month];
    };

    // Get first day of month
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(month, year);

    // Generate calendar days
    const calendarDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(null); // Empty cells for days before month starts
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day);
    }

    const handleDateClick = (day) => {
        if (day === null) return;
        const newSelectedDate = new Date(year, month, day);
        setSelectedDate(newSelectedDate);
    };

    return(
        <div className='event-container'>
            <h1>Events</h1>
            <p>stay updated for upcoming events</p>
            <div className='calendar-header'>
                <h2>{months[month]} {year}</h2>
                <div className='icons'>
                    <button className="nav-btn" onClick={() => setCurrentDate(new Date(year, month - 1))}>&lt;</button>
                    <button className="nav-btn" onClick={() => setCurrentDate(new Date(year, month + 1))}>&gt;</button>
                    <button>+</button>
                    <button>...</button>
                </div>
            </div>
            
            <div className='calendar-grid'>
                {weekDays.map(day => (
                    <div key={day} className='weekday'>{day}</div>
                ))}
                {calendarDays.map((day, index) => (
                    <div 
                        key={index} 
                        className={`calendar-day ${day === null ? 'empty' : ''} ${
                            isCurrentMonth && day === todayDate ? 'today' : ''
                        } ${
                            selectedDate && 
                            selectedDate.getDate() === day && 
                            selectedDate.getMonth() === month && 
                            selectedDate.getFullYear() === year ? 'selected' : ''
                        }`}
                        onClick={() => handleDateClick(day)}
                    >
                        {day}
                    </div>
                ))}
            </div>
            
            {selectedDate && (
                <div className='date-difference'>
                    <p>Difference: {calculateDateDifference()}</p>
                </div>
            )}
        </div>
    );
}