const total = 3665;
const hours = Math.round(total / 3600);
const mins = Math.round((total % 3600) / 60);
const secs = (total % 3600) % 60;
console.log(hours,'ч', mins,'мин',secs,'сек');