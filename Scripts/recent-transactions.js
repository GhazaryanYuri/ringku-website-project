import { recentTransactionsData } from "../Data/recent-transactions.js";

// ----------------------------------------------------------------------

const contentContainer = document.querySelector(".content");

recentTransactionsData.forEach((item) => {
  contentContainer.innerHTML += `<div class="item">
                                        <div class="id item-inner"> ${
                                          item.id
                                        } </div>
                                        <div class="name item-inner"> ${
                                          item.name
                                        } </div>
                                        <div class="date item-inner"> ${
                                          item.date
                                        } </div>
                                        <div class="status ${
                                          item.status
                                        } item-inner"> ${item.status} </div>
                                        <div class="amount ${
                                          item.amount > 0
                                            ? "Positive"
                                            : "Negative"
                                        } item-inner"> $${item.amount} </div>
                                    </div>`;
});
